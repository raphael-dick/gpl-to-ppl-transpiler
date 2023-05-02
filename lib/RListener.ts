// Generated from grammars/R.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./RParser";
import { UnhandeledExpressionContext } from "./RParser";
import { GroupContext } from "./RParser";
import { FloatContext } from "./RParser";
import { ReturnStatementContext } from "./RParser";
import { VariableDeclarationContext } from "./RParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `RParser`.
 */
export default class RListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by the `UnhandeledExpression`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnhandeledExpression?: (ctx: UnhandeledExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnhandeledExpression`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnhandeledExpression?: (ctx: UnhandeledExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `Group`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by the `Group`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;
	/**
	 * Enter a parse tree produced by the `Float`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFloat?: (ctx: FloatContext) => void;
	/**
	 * Exit a parse tree produced by the `Float`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFloat?: (ctx: FloatContext) => void;
	/**
	 * Enter a parse tree produced by the `ReturnStatement`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ReturnStatement`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `VariableDeclaration`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `VariableDeclaration`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `Id`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by the `Id`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
	/**
	 * Enter a parse tree produced by the `String`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `String`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
	/**
	 * Enter a parse tree produced by the `FunctionCall`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionCall`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `Int`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `Int`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;
	/**
	 * Enter a parse tree produced by the `BasicCalculation`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBasicCalculation?: (ctx: BasicCalculationContext) => void;
	/**
	 * Exit a parse tree produced by the `BasicCalculation`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBasicCalculation?: (ctx: BasicCalculationContext) => void;
	/**
	 * Enter a parse tree produced by `RParser.exprlist`.
	 * @param ctx the parse tree
	 */
	enterExprlist?: (ctx: ExprlistContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.exprlist`.
	 * @param ctx the parse tree
	 */
	exitExprlist?: (ctx: ExprlistContext) => void;
	/**
	 * Enter a parse tree produced by `RParser.formlist`.
	 * @param ctx the parse tree
	 */
	enterFormlist?: (ctx: FormlistContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.formlist`.
	 * @param ctx the parse tree
	 */
	exitFormlist?: (ctx: FormlistContext) => void;
	/**
	 * Enter a parse tree produced by `RParser.form`.
	 * @param ctx the parse tree
	 */
	enterForm?: (ctx: FormContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.form`.
	 * @param ctx the parse tree
	 */
	exitForm?: (ctx: FormContext) => void;
	/**
	 * Enter a parse tree produced by `RParser.sublist`.
	 * @param ctx the parse tree
	 */
	enterSublist?: (ctx: SublistContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.sublist`.
	 * @param ctx the parse tree
	 */
	exitSublist?: (ctx: SublistContext) => void;
	/**
	 * Enter a parse tree produced by `RParser.sub`.
	 * @param ctx the parse tree
	 */
	enterSub?: (ctx: SubContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.sub`.
	 * @param ctx the parse tree
	 */
	exitSub?: (ctx: SubContext) => void;
}

