// Generated from grammars/R.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./RParser";
import { GroupContext } from "./RParser";
import { PowerOfContext } from "./RParser";
import { SymbolContext } from "./RParser";
import { ComparisonOperationContext } from "./RParser";
import { StringContext } from "./RParser";
import { IntContext } from "./RParser";
import { UnhandeledExpressionContext } from "./RParser";
import { IfStatementContext } from "./RParser";
import { ArrayItemContext } from "./RParser";
import { ReturnStatementContext } from "./RParser";
import { FunctionDefinitionContext } from "./RParser";
import { VariableDeclarationContext } from "./RParser";
import { FunctionCallContext } from "./RParser";
import { BasicCalculationContext } from "./RParser";
import { ArraySubsetContext } from "./RParser";
import { ForLoopContext } from "./RParser";
import { IfElseStatementContext } from "./RParser";
import { CFunctionContext } from "./RParser";
import { PropertyAccessContext } from "./RParser";
import { FloatContext } from "./RParser";
import { BlockContext } from "./RParser";
import { SignContext } from "./RParser";
import { IdContext } from "./RParser";
import { WhileLoopContext } from "./RParser";
import { RangeDefinitionContext } from "./RParser";
import { ExprlistContext } from "./RParser";
import { EndOfStatementContext } from "./RParser";
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
	 * Enter a parse tree produced by the `PowerOf`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterPowerOf?: (ctx: PowerOfContext) => void;
	/**
	 * Exit a parse tree produced by the `PowerOf`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitPowerOf?: (ctx: PowerOfContext) => void;
	/**
	 * Enter a parse tree produced by the `Symbol`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by the `Symbol`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Enter a parse tree produced by the `ComparisonOperation`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperation?: (ctx: ComparisonOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `ComparisonOperation`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperation?: (ctx: ComparisonOperationContext) => void;
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
	 * Enter a parse tree produced by the `IfStatement`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `IfStatement`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `ArrayItem`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterArrayItem?: (ctx: ArrayItemContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayItem`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitArrayItem?: (ctx: ArrayItemContext) => void;
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
	 * Enter a parse tree produced by the `FunctionDefinition`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionDefinition`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
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
	 * Enter a parse tree produced by the `ArraySubset`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterArraySubset?: (ctx: ArraySubsetContext) => void;
	/**
	 * Exit a parse tree produced by the `ArraySubset`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitArraySubset?: (ctx: ArraySubsetContext) => void;
	/**
	 * Enter a parse tree produced by the `ForLoop`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterForLoop?: (ctx: ForLoopContext) => void;
	/**
	 * Exit a parse tree produced by the `ForLoop`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitForLoop?: (ctx: ForLoopContext) => void;
	/**
	 * Enter a parse tree produced by the `IfElseStatement`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIfElseStatement?: (ctx: IfElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `IfElseStatement`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIfElseStatement?: (ctx: IfElseStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `CFunction`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCFunction?: (ctx: CFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `CFunction`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCFunction?: (ctx: CFunctionContext) => void;
	/**
	 * Enter a parse tree produced by the `PropertyAccess`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterPropertyAccess?: (ctx: PropertyAccessContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyAccess`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitPropertyAccess?: (ctx: PropertyAccessContext) => void;
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
	 * Enter a parse tree produced by the `Block`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by the `Block`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by the `Sign`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSign?: (ctx: SignContext) => void;
	/**
	 * Exit a parse tree produced by the `Sign`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSign?: (ctx: SignContext) => void;
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
	 * Enter a parse tree produced by the `WhileLoop`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterWhileLoop?: (ctx: WhileLoopContext) => void;
	/**
	 * Exit a parse tree produced by the `WhileLoop`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitWhileLoop?: (ctx: WhileLoopContext) => void;
	/**
	 * Enter a parse tree produced by the `RangeDefinition`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterRangeDefinition?: (ctx: RangeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by the `RangeDefinition`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitRangeDefinition?: (ctx: RangeDefinitionContext) => void;
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
	 * Enter a parse tree produced by `RParser.endOfStatement`.
	 * @param ctx the parse tree
	 */
	enterEndOfStatement?: (ctx: EndOfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.endOfStatement`.
	 * @param ctx the parse tree
	 */
	exitEndOfStatement?: (ctx: EndOfStatementContext) => void;
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

