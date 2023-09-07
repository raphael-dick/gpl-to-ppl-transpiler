import ApiVisitor, { APIS } from '@interfaces/ApiVisitor.ts'
import {
  ArrayItemContext,
  BasicCalculationContext,
  BlockContext,
  CFunctionContext,
  ComparisonOperationContext,
  FloatContext,
  ForLoopContext,
  FunctionCallContext,
  FunctionDefinitionContext,
  GroupContext,
  IdContext,
  IfElseStatementContext,
  IfStatementContext,
  IntContext,
  PowerOfContext,
  PropertyAccessContext,
  RangeDefinitionContext,
  ReturnStatementContext,
  SignContext,
  StringContext,
  SymbolContext,
  UnhandeledExpressionContext,
  WhileLoopContext,
} from '@lib/RParser'
import Generator from '@src/interfaces/Generator'

import Visitor from '@lib/RVisitor'
import { ExprlistContext, ProgContext, VariableDeclarationContext } from '@lib/RParser'
import { ParseTree } from 'antlr4'
import { mergeDependencies } from '@src/interfaces/apis/Api'
import RMathApiVisitor from '../apis/RMathApiVisitor'
import SymbolTable, { BaseValueType } from '@src/symbols/SymbolTable'
import { extractNamedArgs } from '../util/RApiVisitorUtil'
import RStandardApiVisitor from '../apis/RStandardApiVisitor'
export default class RVisitor extends Visitor<string> {
  /** the generator for generating the output code */
  private target: Generator

  /** a list of apis which are handled during the transpilation */
  private apis: ApiVisitor[]

  private unifySymbolName(symbol: string) {
    return symbol.replaceAll('.', '_')
  }

  private functionSymbolTable = new SymbolTable<{ args: string[] } & BaseValueType>(this.unifySymbolName)
  private variableSymbolTable = new SymbolTable<BaseValueType>(this.unifySymbolName)

  /**
   * Setup the transpiler
   *
   * @param target the generator for generating the output code
   * @param apis a list of apis which are handled during the transpilation
   */
  constructor(target: Generator, apis: ApiVisitor[]) {
    super()
    this.target = target
    this.apis = apis
  }

  /**
   * Handle inline statements as blocks (in order to unify the code)
   * @param element the target element
   * @returns the target element as a block
   */
  private handleAsBlockAndVisit = (element: ParseTree) => {
    const content = this.visit(element)

    // if the content is inline we still want to handle it as a block
    if (element.getText().indexOf('{') !== -1) {
      return content
    }

    return this.target.handleBlock(content)
  }

  /**
   * Transpiles the input parse tree into output code
   *
   * @param ctx the context of the programm (the tree generated from the lexer)
   * @returns the code in the output language
   */
  start(ctx: ProgContext) {
    const content = this.visitProg(ctx)
    const dependencies = this.target.handleDependencies(mergeDependencies(this.apis.map((api) => api.getTarget().getDependencies())))

    return dependencies + content
  }

  visitProg = (ctx: ProgContext) => {
    return this.visitExprlist(ctx)
  }

  visitExprlist = (ctx: ExprlistContext) => {
    let code = ''

    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i)
      code += this.visit(child)
    }

    return code.trim()
  }

  visit = (ctx: ParseTree) => {
    const text = ctx?.getText?.()
    let result = undefined

    switch (text) {
      case '<EOF>':
        break
      case '\r\n':
      case '\n':
      case '\r':
        result = text
        break
      // case ';':
      //   result = this.target.handleEndOfStatement()
      //   break
      default:
        result = super.visit(ctx)
        break
    }

    return result ?? ''
  }

  visitEndOfStatement = () => {
    return this.target.handleEndOfStatement()
  }

  /* Handling of expressions below */

  visitUnhandeledExpression = (ctx: UnhandeledExpressionContext) => {
    return this.target.handleUnhandeledExpression(ctx.getText())
  }

  visitVariableDeclaration = (ctx: VariableDeclarationContext) => {
    // Todo handle other states '<<-' | '=' | '->' | '->>' | ':='
    const name = this.visit(ctx.getChild(0))
    const value = this.visit(ctx.getChild(2))

    return this.target.handleVariableDeclaration(name, value)
  }

  visitFunctionCall = (ctx: FunctionCallContext) => {
    const name = ctx.getChild(0).getText()
    const args = this.visit(ctx.sublist())
      .filter((item: string) => item && !item?.includes(','))
      .map((item: string[]) => item?.[0])

    for (const api of this.apis) {
      const result = api.lookup(name, args)
      if (result) return result
    }

    const symbolData = this.functionSymbolTable.get(name)

    if (symbolData) {
      const [namedArgs, unnamedArgs] = extractNamedArgs(args)
      const computedArgs = unnamedArgs

      for (let i = unnamedArgs.length; i < symbolData.args.length; i++) {
        const arg = namedArgs[symbolData.args[i]] ?? undefined
        computedArgs.push(arg)
      }

      return this.target.handleFunctionCall(symbolData.symbol, computedArgs)
    }

    return this.target.handleUnhandeledExpression(`${ctx.getText()} is not defined in one of apis`)

    // return this.target.handleFunctionCall(name, args)
  }

  visitString = (ctx: StringContext) => {
    return this.target.handleString(ctx.getText())
  }

  visitId = (ctx: IdContext) => {
    const id = ctx.getText()
    let symbol = this.variableSymbolTable.getSymbol(id)
    if (!symbol) {
      this.variableSymbolTable.add(id, {})
      symbol = this.variableSymbolTable.getSymbol(id)
    }

    return this.target.handleId(symbol)
  }

  visitInt = (ctx: IntContext) => {
    return this.target.handleInt(ctx.getText())
  }

  visitFloat = (ctx: FloatContext) => {
    // TODO: handle "e" values
    const parts = ctx.getText().split('.')
    const main = parts[0]
    const decimal = parts[1]

    return this.target.handleFloat(main, decimal)
  }

  visitBasicCalculation = (ctx: BasicCalculationContext) => {
    const item1 = this.visit(ctx.getChild(0))
    const sign = ctx.getChild(1).getText()
    const item2 = this.visit(ctx.getChild(3) ?? ctx.getChild(2))

    switch (sign) {
      case '+':
        return this.target.handleAddition(item1, item2)
      case '-':
        return this.target.handleSubstraction(item1, item2)
      case '*':
        return this.target.handleMultiplication(item1, item2)
      case '/':
        return this.target.handleDivision(item1, item2)
      default:
        return this.target.handleUnhandeledExpression(sign)
    }
  }

  visitReturnStatement = (ctx: ReturnStatementContext) => {
    const value = this.visit(ctx.getChild(1))
    return this.target.handleReturn(value)
  }

  visitGroup = (ctx: GroupContext) => {
    const value = this.visit(ctx.getChild(1))
    return this.target.handleGroup(value)
  }

  visitFunctionDefinition = (ctx: FunctionDefinitionContext) => {
    // TODO: handle edge cases
    const name = ctx.getChild(0).getText()
    const args = this.visit(ctx.getChild(4))
      ?.filter((x) => !!x)
      ?.map((item) => item?.filter((x) => !!x)[0]) as string[]
    const body = this.visit(ctx.getChild(6))

    this.functionSymbolTable.add(name, {
      args,
    })

    return this.target.handleFunctionDefinition(this.functionSymbolTable.getSymbol(name), args, body)
  }

  visitBlock = (ctx: BlockContext) => {
    const content = this.visit(ctx.getChild(1))
    return this.target.handleBlock(content)
  }

  visitIfStatement = (ctx: IfStatementContext) => {
    const condition = this.visit(ctx.getChild(3))
    const content = this.handleAsBlockAndVisit(ctx.getChild(5))
    return this.target.handleIfStatement(condition, content)
  }

  visitIfElseStatement = (ctx: IfElseStatementContext) => {
    const condition = this.visit(ctx.getChild(2))
    const content = this.handleAsBlockAndVisit(ctx.getChild(4))
    const elseContent = this.handleAsBlockAndVisit(ctx.getChild(6))
    return this.target.handleIfStatement(condition, content) + this.target.handleElseStatement(elseContent)
  }

  visitComparisonOperation = (ctx: ComparisonOperationContext) => {
    const first = this.visit(ctx.getChild(0))
    const symbol = ctx.getChild(1).getText()
    const second = this.visit(ctx.getChild(2))

    switch (symbol) {
      case '>':
        return this.target.handleLargerThan(first, second)
      case '>=':
        return this.target.handleLargerThanOrEqualTo(first, second)
      case '<':
        return this.target.handleLessThan(first, second)
      case '<=':
        return this.target.handleLessThanOrEqualTo(first, second)
      case '==':
        return this.target.handleEqualTo(first, second)
      case '!=':
        return this.target.handleNotEqualTo(first, second)
    }

    return this.target.handleUnhandeledExpression(symbol)
  }

  visitForLoop = (ctx: ForLoopContext) => {
    const iterator = this.visit(ctx.getChild(2))
    const iteration = this.visit(ctx.getChild(4))
    const content = this.visit(ctx.getChild(6))
    return this.target.handleForLoop(iterator, iteration, content)
  }

  visitWhileLoop = (ctx: WhileLoopContext) => {
    const condition = this.visit(ctx.getChild(2))
    const content = this.visit(ctx.getChild(4))
    return this.target.handleWhileLoop(condition, content)
  }

  visitRangeDefinition = (ctx: RangeDefinitionContext) => {
    const api = this.apis.find((item) => item.getName() === APIS.STANDARD_API) as RStandardApiVisitor | undefined
    if (!api) return this.target.handleUnhandeledExpression(`STANDARD_API is required for handling ranges`)

    const from = this.visit(ctx.getChild(0))
    const to = this.visit(ctx.getChild(2))
    return api.getTarget().handleRange(from, to)
  }

  visitPowerOf = (ctx: PowerOfContext) => {
    const api = this.apis.find((item) => item.getName() === APIS.MATH_API) as RMathApiVisitor | undefined
    if (!api) return this.target.handleUnhandeledExpression(`MATH_API is required for handling exponents`)

    const base = this.visit(ctx.getChild(0))
    const exponent = this.visit(ctx.getChild(2))
    return api.getTarget().handlePow(base, exponent)
  }

  visitSymbol = (ctx: SymbolContext) => {
    const symbol = this.visit(ctx.getChild(0))

    switch (symbol) {
      case 'TRUE':
        return this.target.handleBoolean(true)

      case 'FALSE':
        return this.target.handleBoolean(false)

      case 'NULL':
        return this.target.handleUnhandeledExpression(symbol)

      case 'NA':
        return this.target.handleUnhandeledExpression(symbol)

      case 'Inf':
        return this.target.handleUnhandeledExpression(symbol)

      case 'NaN':
        return this.target.handleUnhandeledExpression(symbol)
    }

    return this.target.handleUnhandeledExpression(symbol)
  }

  visitArrayItem = (ctx: ArrayItemContext) => {
    const array = this.visit(ctx.getChild(0))
    const index = this.visit(ctx.getChild(2))

    if (isNaN(index)) {
      return this.target.handleArrayItem(array, index, 1)
    }

    const temp = Number(index) - 1
    return this.target.handleArrayItem(array, temp.toString())
  }

  visitCFunction = (ctx: CFunctionContext) => {
    const content = this.visit(ctx.getChild(1))
      .filter((item) => !!item)
      .map((item) => item[0]) as string[]

    return this.target.handleArray(content)
  }

  visitPropertyAccess = (ctx: PropertyAccessContext) => {
    const target = this.visit(ctx.getChild(0))
    const property = this.visit(ctx.getChild(2))
    return this.target.handlePropertyAccess(target, property)
  }

  visitSign = (ctx: SignContext) => {
    const sign = ctx.getChild(0).getText() as '+' | '-'
    const content = this.visit(ctx.getChild(1))

    return this.target.handleSign(sign, content)
  }
}
