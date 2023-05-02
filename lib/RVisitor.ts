// Generated from grammars/R.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import { ProgContext } from "./RParser";
import { UnhandeledExpressionContext } from "./RParser";
import { GroupContext } from "./RParser";
import { FloatContext } from "./RParser";
import { ReturnStatementContext } from "./RParser";
import { VariableDeclarationContext } from "./RParser";
import { FunctionDefinitionContext } from "./RParser";
import { IdContext } from "./RParser";
import { StringContext } from "./RParser";
import { FunctionCallContext } from "./RParser";
import { IntContext } from "./RParser";
import { BasicCalculationContext } from "./RParser";
import { ExprlistContext } from "./RParser";
import { FormlistContext } from "./RParser";
import { FormContext } from "./RParser";
import { SublistContext } from "./RParser";
import { SubContext } from "./RParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class RVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
	/**
	 * Visit a parse tree produced by the `UnhandeledExpression`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnhandeledExpression?: (ctx: UnhandeledExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `Group`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;
	/**
	 * Visit a parse tree produced by the `Float`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat?: (ctx: FloatContext) => Result;
	/**
	 * Visit a parse tree produced by the `ReturnStatement`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `VariableDeclaration`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by the `FunctionDefinition`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `Id`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
	/**
	 * Visit a parse tree produced by the `String`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
	/**
	 * Visit a parse tree produced by the `FunctionCall`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `Int`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;
	/**
	 * Visit a parse tree produced by the `BasicCalculation`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicCalculation?: (ctx: BasicCalculationContext) => Result;
	/**
	 * Visit a parse tree produced by `RParser.exprlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprlist?: (ctx: ExprlistContext) => Result;
	/**
	 * Visit a parse tree produced by `RParser.formlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormlist?: (ctx: FormlistContext) => Result;
	/**
	 * Visit a parse tree produced by `RParser.form`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForm?: (ctx: FormContext) => Result;
	/**
	 * Visit a parse tree produced by `RParser.sublist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSublist?: (ctx: SublistContext) => Result;
	/**
	 * Visit a parse tree produced by `RParser.sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSub?: (ctx: SubContext) => Result;
}

