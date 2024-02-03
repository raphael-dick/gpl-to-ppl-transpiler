// Generated from grammars/R.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import RListener from "./RListener.js";
import RVisitor from "./RVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class RParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly HEX = 60;
	public static readonly INT = 61;
	public static readonly FLOAT = 62;
	public static readonly COMPLEX = 63;
	public static readonly STRING = 64;
	public static readonly ID = 65;
	public static readonly USER_OP = 66;
	public static readonly COMMENT = 67;
	public static readonly NL = 68;
	public static readonly WS = 69;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_exprlist = 2;
	public static readonly RULE_endOfStatement = 3;
	public static readonly RULE_formlist = 4;
	public static readonly RULE_form = 5;
	public static readonly RULE_sublist = 6;
	public static readonly RULE_sub = 7;
	public static readonly literalNames: (string | null)[] = [ null, "'[['", 
                                                            "']'", "'('", 
                                                            "')'", "'[-c('", 
                                                            "':'", "')]'", 
                                                            "'['", "','", 
                                                            "'<-'", "'='", 
                                                            "'c('", "'::'", 
                                                            "':::'", "'$'", 
                                                            "'@'", "'^'", 
                                                            "'-'", "'+'", 
                                                            "'*'", "'/'", 
                                                            "'>'", "'>='", 
                                                            "'<'", "'<='", 
                                                            "'=='", "'!='", 
                                                            "'!'", "'&'", 
                                                            "'&&'", "'|'", 
                                                            "'||'", "'~'", 
                                                            "'function'", 
                                                            "'<<-'", "'->'", 
                                                            "'->>'", "':='", 
                                                            "'return('", 
                                                            "'{'", "'}'", 
                                                            "'if'", "'else'", 
                                                            "'for'", "'in'", 
                                                            "'while'", "'repeat'", 
                                                            "'?'", "'next'", 
                                                            "'break'", "'NULL'", 
                                                            "'NA'", "'Inf'", 
                                                            "'NaN'", "'TRUE'", 
                                                            "'FALSE'", "';'", 
                                                            "'...'", "'.'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "HEX", "INT", 
                                                             "FLOAT", "COMPLEX", 
                                                             "STRING", "ID", 
                                                             "USER_OP", 
                                                             "COMMENT", 
                                                             "NL", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "expr", "exprlist", "endOfStatement", "formlist", "form", "sublist", 
		"sub",
	];
	public get grammarFileName(): string { return "R.g4"; }
	public get literalNames(): (string | null)[] { return RParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return RParser.symbolicNames; }
	public get ruleNames(): string[] { return RParser.ruleNames; }
	public get serializedATN(): number[] { return RParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, RParser._ATN, RParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, RParser.RULE_prog);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 1107395073) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 669253547) !== 0)) {
				{
				this.state = 25;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
				case 12:
				case 18:
				case 19:
				case 28:
				case 33:
				case 39:
				case 40:
				case 42:
				case 44:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
					{
					this.state = 16;
					this.expr(0);
					this.state = 21;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							this.state = 19;
							this._errHandler.sync(this);
							switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
							case 1:
								{
								this.state = 17;
								this.endOfStatement();
								}
								break;
							case 2:
								{
								this.state = 18;
								this.match(RParser.NL);
								}
								break;
							}
							}
						}
						this.state = 23;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
					}
					}
					break;
				case 68:
					{
					this.state = 24;
					this.match(RParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 30;
			this.match(RParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 2;
		this.enterRecursionRule(localctx, 2, RParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				localctx = new CFunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 33;
				this.match(RParser.T__11);
				this.state = 34;
				this.sublist();
				this.state = 35;
				this.match(RParser.T__3);
				}
				break;
			case 2:
				{
				localctx = new SignContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 37;
				_la = this._input.LA(1);
				if(!(_la===18 || _la===19)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 38;
				this.expr(36);
				}
				break;
			case 3:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 39;
				this.match(RParser.T__27);
				this.state = 40;
				this.expr(30);
				}
				break;
			case 4:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 41;
				this.match(RParser.T__32);
				this.state = 42;
				this.expr(27);
				}
				break;
			case 5:
				{
				localctx = new ReturnStatementContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 43;
				this.match(RParser.T__38);
				this.state = 44;
				this.expr(0);
				this.state = 45;
				this.match(RParser.T__3);
				}
				break;
			case 6:
				{
				localctx = new BlockContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 47;
				this.match(RParser.T__39);
				this.state = 48;
				this.exprlist();
				this.state = 49;
				this.match(RParser.T__40);
				}
				break;
			case 7:
				{
				localctx = new IfStatementContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 51;
				this.match(RParser.T__41);
				this.state = 52;
				this.match(RParser.T__2);
				this.state = 53;
				this.expr(0);
				this.state = 54;
				this.match(RParser.T__3);
				this.state = 55;
				this.expr(21);
				}
				break;
			case 8:
				{
				localctx = new IfElseStatementContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 57;
				this.match(RParser.T__41);
				this.state = 58;
				this.match(RParser.T__2);
				this.state = 59;
				this.expr(0);
				this.state = 60;
				this.match(RParser.T__3);
				this.state = 61;
				this.expr(0);
				this.state = 62;
				this.match(RParser.T__42);
				this.state = 63;
				this.expr(20);
				}
				break;
			case 9:
				{
				localctx = new ForLoopContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 65;
				this.match(RParser.T__43);
				this.state = 66;
				this.match(RParser.T__2);
				this.state = 67;
				this.expr(0);
				this.state = 68;
				this.match(RParser.T__44);
				this.state = 69;
				this.expr(0);
				this.state = 70;
				this.match(RParser.T__3);
				this.state = 71;
				this.expr(19);
				}
				break;
			case 10:
				{
				localctx = new WhileLoopContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 73;
				this.match(RParser.T__45);
				this.state = 74;
				this.match(RParser.T__2);
				this.state = 75;
				this.expr(0);
				this.state = 76;
				this.match(RParser.T__3);
				this.state = 77;
				this.expr(18);
				}
				break;
			case 11:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 79;
				this.match(RParser.T__46);
				this.state = 80;
				this.expr(17);
				}
				break;
			case 12:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 81;
				this.match(RParser.T__47);
				this.state = 82;
				this.expr(16);
				}
				break;
			case 13:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 83;
				this.match(RParser.T__48);
				}
				break;
			case 14:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 84;
				this.match(RParser.T__49);
				}
				break;
			case 15:
				{
				localctx = new GroupContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 85;
				this.match(RParser.T__2);
				this.state = 86;
				this.expr(0);
				this.state = 87;
				this.match(RParser.T__3);
				}
				break;
			case 16:
				{
				localctx = new IdContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 89;
				this.match(RParser.ID);
				}
				break;
			case 17:
				{
				localctx = new StringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 90;
				this.match(RParser.STRING);
				}
				break;
			case 18:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 91;
				this.match(RParser.HEX);
				}
				break;
			case 19:
				{
				localctx = new IntContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 92;
				this.match(RParser.INT);
				}
				break;
			case 20:
				{
				localctx = new FloatContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 93;
				this.match(RParser.FLOAT);
				}
				break;
			case 21:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 94;
				this.match(RParser.COMPLEX);
				}
				break;
			case 22:
				{
				localctx = new SymbolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 95;
				this.match(RParser.T__50);
				}
				break;
			case 23:
				{
				localctx = new SymbolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 96;
				this.match(RParser.T__51);
				}
				break;
			case 24:
				{
				localctx = new SymbolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 97;
				this.match(RParser.T__52);
				}
				break;
			case 25:
				{
				localctx = new SymbolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 98;
				this.match(RParser.T__53);
				}
				break;
			case 26:
				{
				localctx = new SymbolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 99;
				this.match(RParser.T__54);
				}
				break;
			case 27:
				{
				localctx = new SymbolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 100;
				this.match(RParser.T__55);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 192;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 190;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						localctx = new MatrixItemAssignmentContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 103;
						if (!(this.precpred(this._ctx, 42))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 42)");
						}
						this.state = 104;
						this.match(RParser.T__7);
						{
						this.state = 105;
						this.sub();
						this.state = 106;
						this.match(RParser.T__8);
						this.state = 107;
						this.sublist();
						}
						this.state = 109;
						this.match(RParser.T__1);
						this.state = 110;
						_la = this._input.LA(1);
						if(!(_la===10 || _la===11)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 111;
						this.expr(43);
						}
						break;
					case 2:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 113;
						if (!(this.precpred(this._ctx, 39))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 39)");
						}
						this.state = 114;
						_la = this._input.LA(1);
						if(!(_la===13 || _la===14)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 115;
						this.expr(40);
						}
						break;
					case 3:
						{
						localctx = new PropertyAccessContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 116;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 117;
						_la = this._input.LA(1);
						if(!(_la===15 || _la===16)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 118;
						this.expr(39);
						}
						break;
					case 4:
						{
						localctx = new PowerOfContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 119;
						if (!(this.precpred(this._ctx, 37))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 37)");
						}
						this.state = 120;
						this.match(RParser.T__16);
						this.state = 121;
						this.expr(37);
						}
						break;
					case 5:
						{
						localctx = new RangeDefinitionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 122;
						if (!(this.precpred(this._ctx, 35))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 35)");
						}
						this.state = 123;
						this.match(RParser.T__5);
						this.state = 124;
						this.expr(36);
						}
						break;
					case 6:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 125;
						if (!(this.precpred(this._ctx, 34))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
						}
						this.state = 126;
						this.match(RParser.USER_OP);
						this.state = 127;
						this.expr(35);
						}
						break;
					case 7:
						{
						localctx = new BasicCalculationContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 128;
						if (!(this.precpred(this._ctx, 33))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 33)");
						}
						this.state = 129;
						_la = this._input.LA(1);
						if(!(_la===20 || _la===21)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 130;
						this.expr(34);
						}
						break;
					case 8:
						{
						localctx = new BasicCalculationContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 131;
						if (!(this.precpred(this._ctx, 32))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 32)");
						}
						this.state = 132;
						_la = this._input.LA(1);
						if(!(_la===18 || _la===19)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 134;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===68) {
							{
							this.state = 133;
							this.match(RParser.NL);
							}
						}

						this.state = 136;
						this.expr(33);
						}
						break;
					case 9:
						{
						localctx = new ComparisonOperationContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 137;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 138;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 264241152) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 139;
						this.expr(32);
						}
						break;
					case 10:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 140;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 141;
						_la = this._input.LA(1);
						if(!(_la===29 || _la===30)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 142;
						this.expr(30);
						}
						break;
					case 11:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 143;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						this.state = 144;
						_la = this._input.LA(1);
						if(!(_la===31 || _la===32)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 145;
						this.expr(29);
						}
						break;
					case 12:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 146;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 147;
						this.match(RParser.T__32);
						this.state = 148;
						this.expr(27);
						}
						break;
					case 13:
						{
						localctx = new FunctionDefinitionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 149;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 150;
						this.match(RParser.T__9);
						this.state = 151;
						this.match(RParser.T__33);
						this.state = 152;
						this.match(RParser.T__2);
						this.state = 154;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 131) !== 0)) {
							{
							this.state = 153;
							this.formlist();
							}
						}

						this.state = 156;
						this.match(RParser.T__3);
						this.state = 157;
						this.expr(26);
						}
						break;
					case 14:
						{
						localctx = new VariableDeclarationContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 158;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 159;
						_la = this._input.LA(1);
						if(!(((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 503316483) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 160;
						this.expr(25);
						}
						break;
					case 15:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 161;
						if (!(this.precpred(this._ctx, 45))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 45)");
						}
						this.state = 162;
						this.match(RParser.T__0);
						this.state = 163;
						this.sublist();
						this.state = 164;
						this.match(RParser.T__1);
						this.state = 165;
						this.match(RParser.T__1);
						}
						break;
					case 16:
						{
						localctx = new FunctionCallContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 167;
						if (!(this.precpred(this._ctx, 44))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 44)");
						}
						this.state = 168;
						this.match(RParser.T__2);
						this.state = 170;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
						case 1:
							{
							this.state = 169;
							this.match(RParser.NL);
							}
							break;
						}
						this.state = 172;
						this.sublist();
						this.state = 174;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===68) {
							{
							this.state = 173;
							this.match(RParser.NL);
							}
						}

						this.state = 176;
						this.match(RParser.T__3);
						}
						break;
					case 17:
						{
						localctx = new ArraySubsetContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 178;
						if (!(this.precpred(this._ctx, 43))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 43)");
						}
						this.state = 179;
						this.match(RParser.T__4);
						this.state = 180;
						this.expr(0);
						this.state = 181;
						this.match(RParser.T__5);
						this.state = 182;
						this.expr(0);
						this.state = 183;
						this.match(RParser.T__6);
						}
						break;
					case 18:
						{
						localctx = new ArrayItemContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 185;
						if (!(this.precpred(this._ctx, 41))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 41)");
						}
						this.state = 186;
						this.match(RParser.T__7);
						this.state = 187;
						this.sublist();
						this.state = 188;
						this.match(RParser.T__1);
						}
						break;
					}
					}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exprlist(): ExprlistContext {
		let localctx: ExprlistContext = new ExprlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, RParser.RULE_exprlist);
		let _la: number;
		try {
			let _alt: number;
			this.state = 212;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 12:
			case 18:
			case 19:
			case 28:
			case 33:
			case 39:
			case 40:
			case 42:
			case 44:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 68:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 195;
					this.match(RParser.NL);
					}
				}

				this.state = 198;
				this.expr(0);
				this.state = 205;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 199;
						this.endOfStatement();
						this.state = 201;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 1107395073) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 132382635) !== 0)) {
							{
							this.state = 200;
							this.expr(0);
							}
						}

						}
						}
					}
					this.state = 207;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 208;
					this.match(RParser.NL);
					}
				}

				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public endOfStatement(): EndOfStatementContext {
		let localctx: EndOfStatementContext = new EndOfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, RParser.RULE_endOfStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 57:
				{
				{
				this.state = 214;
				this.match(RParser.T__56);
				this.state = 216;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 215;
					this.match(RParser.NL);
					}
					break;
				}
				}
				}
				break;
			case 68:
				{
				this.state = 218;
				this.match(RParser.NL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formlist(): FormlistContext {
		let localctx: FormlistContext = new FormlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, RParser.RULE_formlist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 221;
			this.form();
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 222;
				this.match(RParser.T__8);
				this.state = 223;
				this.form();
				}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public form(): FormContext {
		let localctx: FormContext = new FormContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, RParser.RULE_form);
		try {
			this.state = 235;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 229;
				this.match(RParser.ID);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 230;
				this.match(RParser.ID);
				this.state = 231;
				this.match(RParser.T__10);
				this.state = 232;
				this.expr(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 233;
				this.match(RParser.T__57);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 234;
				this.match(RParser.T__58);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sublist(): SublistContext {
		let localctx: SublistContext = new SublistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, RParser.RULE_sublist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 237;
			this.sub();
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 238;
				this.match(RParser.T__8);
				{
				this.state = 240;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 239;
					this.match(RParser.NL);
					}
					break;
				}
				}
				this.state = 242;
				this.sub();
				}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sub(): SubContext {
		let localctx: SubContext = new SubContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, RParser.RULE_sub);
		try {
			this.state = 267;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 248;
				this.expr(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 249;
				this.match(RParser.ID);
				this.state = 250;
				this.match(RParser.T__10);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 251;
				this.match(RParser.ID);
				this.state = 252;
				this.match(RParser.T__10);
				this.state = 253;
				this.expr(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 254;
				this.match(RParser.STRING);
				this.state = 255;
				this.match(RParser.T__10);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 256;
				this.match(RParser.STRING);
				this.state = 257;
				this.match(RParser.T__10);
				this.state = 258;
				this.expr(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 259;
				this.match(RParser.T__50);
				this.state = 260;
				this.match(RParser.T__10);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 261;
				this.match(RParser.T__50);
				this.state = 262;
				this.match(RParser.T__10);
				this.state = 263;
				this.expr(0);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 264;
				this.match(RParser.T__57);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 265;
				this.match(RParser.T__58);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 42);
		case 1:
			return this.precpred(this._ctx, 39);
		case 2:
			return this.precpred(this._ctx, 38);
		case 3:
			return this.precpred(this._ctx, 37);
		case 4:
			return this.precpred(this._ctx, 35);
		case 5:
			return this.precpred(this._ctx, 34);
		case 6:
			return this.precpred(this._ctx, 33);
		case 7:
			return this.precpred(this._ctx, 32);
		case 8:
			return this.precpred(this._ctx, 31);
		case 9:
			return this.precpred(this._ctx, 29);
		case 10:
			return this.precpred(this._ctx, 28);
		case 11:
			return this.precpred(this._ctx, 26);
		case 12:
			return this.precpred(this._ctx, 25);
		case 13:
			return this.precpred(this._ctx, 24);
		case 14:
			return this.precpred(this._ctx, 45);
		case 15:
			return this.precpred(this._ctx, 44);
		case 16:
			return this.precpred(this._ctx, 43);
		case 17:
			return this.precpred(this._ctx, 41);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,69,270,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,5,0,20,
	8,0,10,0,12,0,23,9,0,1,0,5,0,26,8,0,10,0,12,0,29,9,0,1,0,1,0,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,102,8,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,135,8,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,155,8,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,171,8,1,1,1,1,1,3,
	1,175,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,191,
	8,1,10,1,12,1,194,9,1,1,2,3,2,197,8,2,1,2,1,2,1,2,3,2,202,8,2,5,2,204,8,
	2,10,2,12,2,207,9,2,1,2,3,2,210,8,2,1,2,3,2,213,8,2,1,3,1,3,3,3,217,8,3,
	1,3,3,3,220,8,3,1,4,1,4,1,4,5,4,225,8,4,10,4,12,4,228,9,4,1,5,1,5,1,5,1,
	5,1,5,1,5,3,5,236,8,5,1,6,1,6,1,6,3,6,241,8,6,1,6,5,6,244,8,6,10,6,12,6,
	247,9,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,3,7,268,8,7,1,7,0,1,2,8,0,2,4,6,8,10,12,14,0,9,1,0,18,19,1,
	0,10,11,1,0,13,14,1,0,15,16,1,0,20,21,1,0,22,27,1,0,29,30,1,0,31,32,2,0,
	10,11,35,38,335,0,27,1,0,0,0,2,101,1,0,0,0,4,212,1,0,0,0,6,219,1,0,0,0,
	8,221,1,0,0,0,10,235,1,0,0,0,12,237,1,0,0,0,14,267,1,0,0,0,16,21,3,2,1,
	0,17,20,3,6,3,0,18,20,5,68,0,0,19,17,1,0,0,0,19,18,1,0,0,0,20,23,1,0,0,
	0,21,19,1,0,0,0,21,22,1,0,0,0,22,26,1,0,0,0,23,21,1,0,0,0,24,26,5,68,0,
	0,25,16,1,0,0,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,
	28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,0,0,1,31,1,1,0,0,0,32,33,6,1,-1,0,33,
	34,5,12,0,0,34,35,3,12,6,0,35,36,5,4,0,0,36,102,1,0,0,0,37,38,7,0,0,0,38,
	102,3,2,1,36,39,40,5,28,0,0,40,102,3,2,1,30,41,42,5,33,0,0,42,102,3,2,1,
	27,43,44,5,39,0,0,44,45,3,2,1,0,45,46,5,4,0,0,46,102,1,0,0,0,47,48,5,40,
	0,0,48,49,3,4,2,0,49,50,5,41,0,0,50,102,1,0,0,0,51,52,5,42,0,0,52,53,5,
	3,0,0,53,54,3,2,1,0,54,55,5,4,0,0,55,56,3,2,1,21,56,102,1,0,0,0,57,58,5,
	42,0,0,58,59,5,3,0,0,59,60,3,2,1,0,60,61,5,4,0,0,61,62,3,2,1,0,62,63,5,
	43,0,0,63,64,3,2,1,20,64,102,1,0,0,0,65,66,5,44,0,0,66,67,5,3,0,0,67,68,
	3,2,1,0,68,69,5,45,0,0,69,70,3,2,1,0,70,71,5,4,0,0,71,72,3,2,1,19,72,102,
	1,0,0,0,73,74,5,46,0,0,74,75,5,3,0,0,75,76,3,2,1,0,76,77,5,4,0,0,77,78,
	3,2,1,18,78,102,1,0,0,0,79,80,5,47,0,0,80,102,3,2,1,17,81,82,5,48,0,0,82,
	102,3,2,1,16,83,102,5,49,0,0,84,102,5,50,0,0,85,86,5,3,0,0,86,87,3,2,1,
	0,87,88,5,4,0,0,88,102,1,0,0,0,89,102,5,65,0,0,90,102,5,64,0,0,91,102,5,
	60,0,0,92,102,5,61,0,0,93,102,5,62,0,0,94,102,5,63,0,0,95,102,5,51,0,0,
	96,102,5,52,0,0,97,102,5,53,0,0,98,102,5,54,0,0,99,102,5,55,0,0,100,102,
	5,56,0,0,101,32,1,0,0,0,101,37,1,0,0,0,101,39,1,0,0,0,101,41,1,0,0,0,101,
	43,1,0,0,0,101,47,1,0,0,0,101,51,1,0,0,0,101,57,1,0,0,0,101,65,1,0,0,0,
	101,73,1,0,0,0,101,79,1,0,0,0,101,81,1,0,0,0,101,83,1,0,0,0,101,84,1,0,
	0,0,101,85,1,0,0,0,101,89,1,0,0,0,101,90,1,0,0,0,101,91,1,0,0,0,101,92,
	1,0,0,0,101,93,1,0,0,0,101,94,1,0,0,0,101,95,1,0,0,0,101,96,1,0,0,0,101,
	97,1,0,0,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,0,102,192,1,0,0,
	0,103,104,10,42,0,0,104,105,5,8,0,0,105,106,3,14,7,0,106,107,5,9,0,0,107,
	108,3,12,6,0,108,109,1,0,0,0,109,110,5,2,0,0,110,111,7,1,0,0,111,112,3,
	2,1,43,112,191,1,0,0,0,113,114,10,39,0,0,114,115,7,2,0,0,115,191,3,2,1,
	40,116,117,10,38,0,0,117,118,7,3,0,0,118,191,3,2,1,39,119,120,10,37,0,0,
	120,121,5,17,0,0,121,191,3,2,1,37,122,123,10,35,0,0,123,124,5,6,0,0,124,
	191,3,2,1,36,125,126,10,34,0,0,126,127,5,66,0,0,127,191,3,2,1,35,128,129,
	10,33,0,0,129,130,7,4,0,0,130,191,3,2,1,34,131,132,10,32,0,0,132,134,7,
	0,0,0,133,135,5,68,0,0,134,133,1,0,0,0,134,135,1,0,0,0,135,136,1,0,0,0,
	136,191,3,2,1,33,137,138,10,31,0,0,138,139,7,5,0,0,139,191,3,2,1,32,140,
	141,10,29,0,0,141,142,7,6,0,0,142,191,3,2,1,30,143,144,10,28,0,0,144,145,
	7,7,0,0,145,191,3,2,1,29,146,147,10,26,0,0,147,148,5,33,0,0,148,191,3,2,
	1,27,149,150,10,25,0,0,150,151,5,10,0,0,151,152,5,34,0,0,152,154,5,3,0,
	0,153,155,3,8,4,0,154,153,1,0,0,0,154,155,1,0,0,0,155,156,1,0,0,0,156,157,
	5,4,0,0,157,191,3,2,1,26,158,159,10,24,0,0,159,160,7,8,0,0,160,191,3,2,
	1,25,161,162,10,45,0,0,162,163,5,1,0,0,163,164,3,12,6,0,164,165,5,2,0,0,
	165,166,5,2,0,0,166,191,1,0,0,0,167,168,10,44,0,0,168,170,5,3,0,0,169,171,
	5,68,0,0,170,169,1,0,0,0,170,171,1,0,0,0,171,172,1,0,0,0,172,174,3,12,6,
	0,173,175,5,68,0,0,174,173,1,0,0,0,174,175,1,0,0,0,175,176,1,0,0,0,176,
	177,5,4,0,0,177,191,1,0,0,0,178,179,10,43,0,0,179,180,5,5,0,0,180,181,3,
	2,1,0,181,182,5,6,0,0,182,183,3,2,1,0,183,184,5,7,0,0,184,191,1,0,0,0,185,
	186,10,41,0,0,186,187,5,8,0,0,187,188,3,12,6,0,188,189,5,2,0,0,189,191,
	1,0,0,0,190,103,1,0,0,0,190,113,1,0,0,0,190,116,1,0,0,0,190,119,1,0,0,0,
	190,122,1,0,0,0,190,125,1,0,0,0,190,128,1,0,0,0,190,131,1,0,0,0,190,137,
	1,0,0,0,190,140,1,0,0,0,190,143,1,0,0,0,190,146,1,0,0,0,190,149,1,0,0,0,
	190,158,1,0,0,0,190,161,1,0,0,0,190,167,1,0,0,0,190,178,1,0,0,0,190,185,
	1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,3,1,0,0,0,194,
	192,1,0,0,0,195,197,5,68,0,0,196,195,1,0,0,0,196,197,1,0,0,0,197,198,1,
	0,0,0,198,205,3,2,1,0,199,201,3,6,3,0,200,202,3,2,1,0,201,200,1,0,0,0,201,
	202,1,0,0,0,202,204,1,0,0,0,203,199,1,0,0,0,204,207,1,0,0,0,205,203,1,0,
	0,0,205,206,1,0,0,0,206,209,1,0,0,0,207,205,1,0,0,0,208,210,5,68,0,0,209,
	208,1,0,0,0,209,210,1,0,0,0,210,213,1,0,0,0,211,213,1,0,0,0,212,196,1,0,
	0,0,212,211,1,0,0,0,213,5,1,0,0,0,214,216,5,57,0,0,215,217,5,68,0,0,216,
	215,1,0,0,0,216,217,1,0,0,0,217,220,1,0,0,0,218,220,5,68,0,0,219,214,1,
	0,0,0,219,218,1,0,0,0,220,7,1,0,0,0,221,226,3,10,5,0,222,223,5,9,0,0,223,
	225,3,10,5,0,224,222,1,0,0,0,225,228,1,0,0,0,226,224,1,0,0,0,226,227,1,
	0,0,0,227,9,1,0,0,0,228,226,1,0,0,0,229,236,5,65,0,0,230,231,5,65,0,0,231,
	232,5,11,0,0,232,236,3,2,1,0,233,236,5,58,0,0,234,236,5,59,0,0,235,229,
	1,0,0,0,235,230,1,0,0,0,235,233,1,0,0,0,235,234,1,0,0,0,236,11,1,0,0,0,
	237,245,3,14,7,0,238,240,5,9,0,0,239,241,5,68,0,0,240,239,1,0,0,0,240,241,
	1,0,0,0,241,242,1,0,0,0,242,244,3,14,7,0,243,238,1,0,0,0,244,247,1,0,0,
	0,245,243,1,0,0,0,245,246,1,0,0,0,246,13,1,0,0,0,247,245,1,0,0,0,248,268,
	3,2,1,0,249,250,5,65,0,0,250,268,5,11,0,0,251,252,5,65,0,0,252,253,5,11,
	0,0,253,268,3,2,1,0,254,255,5,64,0,0,255,268,5,11,0,0,256,257,5,64,0,0,
	257,258,5,11,0,0,258,268,3,2,1,0,259,260,5,51,0,0,260,268,5,11,0,0,261,
	262,5,51,0,0,262,263,5,11,0,0,263,268,3,2,1,0,264,268,5,58,0,0,265,268,
	5,59,0,0,266,268,1,0,0,0,267,248,1,0,0,0,267,249,1,0,0,0,267,251,1,0,0,
	0,267,254,1,0,0,0,267,256,1,0,0,0,267,259,1,0,0,0,267,261,1,0,0,0,267,264,
	1,0,0,0,267,265,1,0,0,0,267,266,1,0,0,0,268,15,1,0,0,0,23,19,21,25,27,101,
	134,154,170,174,190,192,196,201,205,209,212,216,219,226,235,240,245,267];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RParser.__ATN) {
			RParser.__ATN = new ATNDeserializer().deserialize(RParser._serializedATN);
		}

		return RParser.__ATN;
	}


	static DecisionsToDFA = RParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: RParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(RParser.EOF, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(RParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(RParser.NL, i);
	}
	public endOfStatement_list(): EndOfStatementContext[] {
		return this.getTypedRuleContexts(EndOfStatementContext) as EndOfStatementContext[];
	}
	public endOfStatement(i: number): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, i) as EndOfStatementContext;
	}
    public get ruleIndex(): number {
    	return RParser.RULE_prog;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: RParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return RParser.RULE_expr;
	}
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class GroupContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterGroup) {
	 		listener.enterGroup(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitGroup) {
	 		listener.exitGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitGroup) {
			return visitor.visitGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerOfContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterPowerOf) {
	 		listener.enterPowerOf(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitPowerOf) {
	 		listener.exitPowerOf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitPowerOf) {
			return visitor.visitPowerOf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SymbolContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterSymbol) {
	 		listener.enterSymbol(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitSymbol) {
	 		listener.exitSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitSymbol) {
			return visitor.visitSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonOperationContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterComparisonOperation) {
	 		listener.enterComparisonOperation(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitComparisonOperation) {
	 		listener.exitComparisonOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitComparisonOperation) {
			return visitor.visitComparisonOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(RParser.STRING, 0);
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitString) {
	 		listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INT(): TerminalNode {
		return this.getToken(RParser.INT, 0);
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterInt) {
	 		listener.enterInt(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitInt) {
	 		listener.exitInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitInt) {
			return visitor.visitInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnhandeledExpressionContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public HEX(): TerminalNode {
		return this.getToken(RParser.HEX, 0);
	}
	public COMPLEX(): TerminalNode {
		return this.getToken(RParser.COMPLEX, 0);
	}
	public USER_OP(): TerminalNode {
		return this.getToken(RParser.USER_OP, 0);
	}
	public sublist(): SublistContext {
		return this.getTypedRuleContext(SublistContext, 0) as SublistContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterUnhandeledExpression) {
	 		listener.enterUnhandeledExpression(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitUnhandeledExpression) {
	 		listener.exitUnhandeledExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitUnhandeledExpression) {
			return visitor.visitUnhandeledExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfStatementContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayItemContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public sublist(): SublistContext {
		return this.getTypedRuleContext(SublistContext, 0) as SublistContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterArrayItem) {
	 		listener.enterArrayItem(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitArrayItem) {
	 		listener.exitArrayItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitArrayItem) {
			return visitor.visitArrayItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStatementContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionDefinitionContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public formlist(): FormlistContext {
		return this.getTypedRuleContext(FormlistContext, 0) as FormlistContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterFunctionDefinition) {
	 		listener.enterFunctionDefinition(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitFunctionDefinition) {
	 		listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableDeclarationContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterVariableDeclaration) {
	 		listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitVariableDeclaration) {
	 		listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public sublist(): SublistContext {
		return this.getTypedRuleContext(SublistContext, 0) as SublistContext;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(RParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(RParser.NL, i);
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BasicCalculationContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public NL(): TerminalNode {
		return this.getToken(RParser.NL, 0);
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterBasicCalculation) {
	 		listener.enterBasicCalculation(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitBasicCalculation) {
	 		listener.exitBasicCalculation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitBasicCalculation) {
			return visitor.visitBasicCalculation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArraySubsetContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterArraySubset) {
	 		listener.enterArraySubset(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitArraySubset) {
	 		listener.exitArraySubset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitArraySubset) {
			return visitor.visitArraySubset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForLoopContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterForLoop) {
	 		listener.enterForLoop(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitForLoop) {
	 		listener.exitForLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitForLoop) {
			return visitor.visitForLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfElseStatementContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterIfElseStatement) {
	 		listener.enterIfElseStatement(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitIfElseStatement) {
	 		listener.exitIfElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitIfElseStatement) {
			return visitor.visitIfElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CFunctionContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public sublist(): SublistContext {
		return this.getTypedRuleContext(SublistContext, 0) as SublistContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterCFunction) {
	 		listener.enterCFunction(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitCFunction) {
	 		listener.exitCFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitCFunction) {
			return visitor.visitCFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyAccessContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterPropertyAccess) {
	 		listener.enterPropertyAccess(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitPropertyAccess) {
	 		listener.exitPropertyAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitPropertyAccess) {
			return visitor.visitPropertyAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(RParser.FLOAT, 0);
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterFloat) {
	 		listener.enterFloat(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitFloat) {
	 		listener.exitFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitFloat) {
			return visitor.visitFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exprlist(): ExprlistContext {
		return this.getTypedRuleContext(ExprlistContext, 0) as ExprlistContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SignContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterSign) {
	 		listener.enterSign(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitSign) {
	 		listener.exitSign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitSign) {
			return visitor.visitSign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(RParser.ID, 0);
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterId) {
	 		listener.enterId(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitId) {
	 		listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MatrixItemAssignmentContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public sub(): SubContext {
		return this.getTypedRuleContext(SubContext, 0) as SubContext;
	}
	public sublist(): SublistContext {
		return this.getTypedRuleContext(SublistContext, 0) as SublistContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterMatrixItemAssignment) {
	 		listener.enterMatrixItemAssignment(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitMatrixItemAssignment) {
	 		listener.exitMatrixItemAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitMatrixItemAssignment) {
			return visitor.visitMatrixItemAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileLoopContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterWhileLoop) {
	 		listener.enterWhileLoop(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitWhileLoop) {
	 		listener.exitWhileLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitWhileLoop) {
			return visitor.visitWhileLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RangeDefinitionContext extends ExprContext {
	constructor(parser: RParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterRangeDefinition) {
	 		listener.enterRangeDefinition(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitRangeDefinition) {
	 		listener.exitRangeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitRangeDefinition) {
			return visitor.visitRangeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprlistContext extends ParserRuleContext {
	constructor(parser?: RParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(RParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(RParser.NL, i);
	}
	public endOfStatement_list(): EndOfStatementContext[] {
		return this.getTypedRuleContexts(EndOfStatementContext) as EndOfStatementContext[];
	}
	public endOfStatement(i: number): EndOfStatementContext {
		return this.getTypedRuleContext(EndOfStatementContext, i) as EndOfStatementContext;
	}
    public get ruleIndex(): number {
    	return RParser.RULE_exprlist;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterExprlist) {
	 		listener.enterExprlist(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitExprlist) {
	 		listener.exitExprlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitExprlist) {
			return visitor.visitExprlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndOfStatementContext extends ParserRuleContext {
	constructor(parser?: RParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL(): TerminalNode {
		return this.getToken(RParser.NL, 0);
	}
    public get ruleIndex(): number {
    	return RParser.RULE_endOfStatement;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterEndOfStatement) {
	 		listener.enterEndOfStatement(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitEndOfStatement) {
	 		listener.exitEndOfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitEndOfStatement) {
			return visitor.visitEndOfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormlistContext extends ParserRuleContext {
	constructor(parser?: RParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public form_list(): FormContext[] {
		return this.getTypedRuleContexts(FormContext) as FormContext[];
	}
	public form(i: number): FormContext {
		return this.getTypedRuleContext(FormContext, i) as FormContext;
	}
    public get ruleIndex(): number {
    	return RParser.RULE_formlist;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterFormlist) {
	 		listener.enterFormlist(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitFormlist) {
	 		listener.exitFormlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitFormlist) {
			return visitor.visitFormlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormContext extends ParserRuleContext {
	constructor(parser?: RParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(RParser.ID, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return RParser.RULE_form;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterForm) {
	 		listener.enterForm(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitForm) {
	 		listener.exitForm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitForm) {
			return visitor.visitForm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SublistContext extends ParserRuleContext {
	constructor(parser?: RParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sub_list(): SubContext[] {
		return this.getTypedRuleContexts(SubContext) as SubContext[];
	}
	public sub(i: number): SubContext {
		return this.getTypedRuleContext(SubContext, i) as SubContext;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(RParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(RParser.NL, i);
	}
    public get ruleIndex(): number {
    	return RParser.RULE_sublist;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterSublist) {
	 		listener.enterSublist(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitSublist) {
	 		listener.exitSublist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitSublist) {
			return visitor.visitSublist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubContext extends ParserRuleContext {
	constructor(parser?: RParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public ID(): TerminalNode {
		return this.getToken(RParser.ID, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(RParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return RParser.RULE_sub;
	}
	public enterRule(listener: RListener): void {
	    if(listener.enterSub) {
	 		listener.enterSub(this);
		}
	}
	public exitRule(listener: RListener): void {
	    if(listener.exitSub) {
	 		listener.exitSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RVisitor<Result>): Result {
		if (visitor.visitSub) {
			return visitor.visitSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
