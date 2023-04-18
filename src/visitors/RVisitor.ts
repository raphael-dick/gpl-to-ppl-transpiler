import { FunctionCallContext, IdContext, StringContext, UnhandeledExpressionContext } from './../../lib/RParser';
import IntermediateVisitor from '/src/interfaces/IntermediateVisitor';

import Visitor from '../../lib/RVisitor'
import { ExprlistContext, ProgContext, VariableDeclarationContext } from '../../lib/RParser';
import { ParseTree } from 'antlr4';

export default class RVisitor extends Visitor<string> {

  private target: IntermediateVisitor

  constructor(target: IntermediateVisitor) {
    super();

    this.target = target
  }

  start( ctx: ProgContext ) {
    return this.visitProg(ctx)
  }

	visitProg = (ctx: ProgContext) => {
    return this.visitExprlist(ctx)
  };

	visitExprlist = (ctx: ExprlistContext) => {
    let code = '';

    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i)

      

      // console.log(child.getText().replace('\n', 'NL'));
      code += this.visit(child)

      
    }

    return code.trim();
  }; 

  visit = (ctx: ParseTree) => {
    const text = ctx?.getText?.()
    let result = undefined

    switch (text) {
      case "<EOF>": break;
      case "\n": case "\r":
        result = text;
        break;
    
      default:
        result = super.visit(ctx)
        break;
    }
    
    return result ?? ''
  }

  /* Handling of expressions below */

  visitUnhandeledExpression = (ctx: UnhandeledExpressionContext) => {
    return `<<<<Unhandled Expression: '${ctx.getText()}'>>>>`
  }

  visitVariableDeclaration = (ctx: VariableDeclarationContext) => {
    const name = this.visit( ctx.getChild(0) )
    const value = this.visit( ctx.getChild(2) )

    return this.target.handleVariableDeclaration(name, value)
  }

  visitFunctionCall = (ctx: FunctionCallContext) => {
    const name = ctx.getChild(0).getText()
    const args = this.visit(ctx.sublist()).filter((item: string) => item && !item?.includes(','))
    
    return this.target.handleFunctionCall(name, args)
  }

  visitString = (ctx: StringContext) => {
    return ctx.getText()
  }

  visitId = (ctx: IdContext) => {
    return ctx.getText()
  }

}