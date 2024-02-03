// Generated from grammars/R.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


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
import { MatrixItemAssignmentContext } from "./RParser";
import { WhileLoopContext } from "./RParser";
import { RangeDefinitionContext } from "./RParser";
import { ExprlistContext } from "./RParser";
import { EndOfStatementContext } from "./RParser";
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
	 * Visit a parse tree produced by the `Group`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;
	/**
	 * Visit a parse tree produced by the `PowerOf`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerOf?: (ctx: PowerOfContext) => Result;
	/**
	 * Visit a parse tree produced by the `Symbol`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;
	/**
	 * Visit a parse tree produced by the `ComparisonOperation`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperation?: (ctx: ComparisonOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `String`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
	/**
	 * Visit a parse tree produced by the `Int`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;
	/**
	 * Visit a parse tree produced by the `UnhandeledExpression`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnhandeledExpression?: (ctx: UnhandeledExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `IfStatement`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `ArrayItem`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayItem?: (ctx: ArrayItemContext) => Result;
	/**
	 * Visit a parse tree produced by the `ReturnStatement`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `FunctionDefinition`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `VariableDeclaration`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by the `FunctionCall`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `BasicCalculation`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicCalculation?: (ctx: BasicCalculationContext) => Result;
	/**
	 * Visit a parse tree produced by the `ArraySubset`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArraySubset?: (ctx: ArraySubsetContext) => Result;
	/**
	 * Visit a parse tree produced by the `ForLoop`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForLoop?: (ctx: ForLoopContext) => Result;
	/**
	 * Visit a parse tree produced by the `IfElseStatement`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseStatement?: (ctx: IfElseStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `CFunction`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCFunction?: (ctx: CFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by the `PropertyAccess`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyAccess?: (ctx: PropertyAccessContext) => Result;
	/**
	 * Visit a parse tree produced by the `Float`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat?: (ctx: FloatContext) => Result;
	/**
	 * Visit a parse tree produced by the `Block`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by the `Sign`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSign?: (ctx: SignContext) => Result;
	/**
	 * Visit a parse tree produced by the `Id`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
	/**
	 * Visit a parse tree produced by the `MatrixItemAssignment`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatrixItemAssignment?: (ctx: MatrixItemAssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by the `WhileLoop`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileLoop?: (ctx: WhileLoopContext) => Result;
	/**
	 * Visit a parse tree produced by the `RangeDefinition`
	 * labeled alternative in `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeDefinition?: (ctx: RangeDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `RParser.exprlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprlist?: (ctx: ExprlistContext) => Result;
	/**
	 * Visit a parse tree produced by `RParser.endOfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndOfStatement?: (ctx: EndOfStatementContext) => Result;
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

