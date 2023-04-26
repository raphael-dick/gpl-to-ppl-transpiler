import ApiVisitor from '@interfaces/ApiVisitor.ts';
import { BasicCalculationContext, FunctionCallContext, IdContext, IntContext, StringContext, UnhandeledExpressionContext } from '@lib/RParser';
import IntermediateVisitor from '@interfaces/IntermediateVisitor';

import Visitor from '@lib/RVisitor';
import { ExprlistContext, ProgContext, VariableDeclarationContext } from '@lib/RParser';
import { ParseTree } from 'antlr4';

export default class RVisitor extends Visitor<string> {
  /** the generator for generating the output code */
  private target: IntermediateVisitor;

  /** a list of apis which are handled during the transpilation */
  private apis: ApiVisitor[];

  /**
   * Setup the transpiler
   *
   * @param target the generator for generating the output code
   * @param apis a list of apis which are handled during the transpilation
   */
  constructor(target: IntermediateVisitor, apis: ApiVisitor[]) {
    super();
    this.target = target;
    this.apis = apis;
  }

  /**
   * Transpiles the input parse tree into output code
   *
   * @param ctx the context of the programm (the tree generated from the lexer)
   * @returns the code in the output language
   */
  start(ctx: ProgContext) {
    return this.visitProg(ctx);
  }

  visitProg = (ctx: ProgContext) => {
    return this.visitExprlist(ctx);
  };

  visitExprlist = (ctx: ExprlistContext) => {
    let code = '';

    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);

      // console.log(child.getText().replace('\n', 'NL'));
      code += this.visit(child);
    }

    return code.trim();
  };

  visit = (ctx: ParseTree) => {
    const text = ctx?.getText?.();
    let result = undefined;

    switch (text) {
      case '<EOF>':
        break;
      case '\n':
      case '\r':
        result = text;
        break;

      default:
        result = super.visit(ctx);
        break;
    }

    return result ?? '';
  };

  /* Handling of expressions below */

  visitUnhandeledExpression = (ctx: UnhandeledExpressionContext) => {
    return this.target.handleUnhandeledExpression(ctx.getText());
  };

  visitVariableDeclaration = (ctx: VariableDeclarationContext) => {
    const name = this.visit(ctx.getChild(0));
    const value = this.visit(ctx.getChild(2));

    return this.target.handleVariableDeclaration(name, value);
  };

  visitFunctionCall = (ctx: FunctionCallContext) => {
    const name = ctx.getChild(0).getText();
    const args = this.visit(ctx.sublist()).filter((item: string) => item && !item?.includes(','));

    for (const api of this.apis) {
      const result = api.lookup(name, args);
      if (result) return result;
    }

    return this.target.handleUnhandeledExpression(`${ctx.getText()} is not defined in one of apis`);

    // return this.target.handleFunctionCall(name, args)
  };

  visitString = (ctx: StringContext) => {
    return ctx.getText();
  };

  visitId = (ctx: IdContext) => {
    return ctx.getText();
  };

  visitInt = (ctx: IntContext) => {
    return ctx.getText();
  };

  visitBasicCalculation = (ctx: BasicCalculationContext) => {
    const item1 = this.visit(ctx.getChild(0));
    const sign = ctx.getChild(1).getText();
    const item2 = this.visit(ctx.getChild(2));

    switch (sign) {
      case '+':
        return this.target.handleAddition(item1, item2);
      case '-':
        return this.target.handleSubstraction(item1, item2);
      case '*':
        return this.target.handleMultiplication(item1, item2);
      case '/':
        return this.target.handleDivision(item1, item2);
      default:
        return this.target.handleUnhandeledExpression(sign);
    }
  };
}
