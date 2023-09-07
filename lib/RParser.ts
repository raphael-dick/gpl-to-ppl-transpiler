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
	public static readonly HEX = 58;
	public static readonly INT = 59;
	public static readonly FLOAT = 60;
	public static readonly COMPLEX = 61;
	public static readonly STRING = 62;
	public static readonly ID = 63;
	public static readonly USER_OP = 64;
	public static readonly COMMENT = 65;
	public static readonly NL = 66;
	public static readonly WS = 67;
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
                                                            "')'", "'['", 
                                                            "'c('", "'::'", 
                                                            "':::'", "'$'", 
                                                            "'@'", "'^'", 
                                                            "'-'", "'+'", 
                                                            "':'", "'*'", 
                                                            "'/'", "'>'", 
                                                            "'>='", "'<'", 
                                                            "'<='", "'=='", 
                                                            "'!='", "'!'", 
                                                            "'&'", "'&&'", 
                                                            "'|'", "'||'", 
                                                            "'~'", "'<-'", 
                                                            "'function'", 
                                                            "'<<-'", "'='", 
                                                            "'->'", "'->>'", 
                                                            "':='", "'return('", 
                                                            "'{'", "'}'", 
                                                            "'if'", "'else'", 
                                                            "'for'", "'in'", 
                                                            "'while'", "'repeat'", 
                                                            "'?'", "'next'", 
                                                            "'break'", "'NULL'", 
                                                            "'NA'", "'Inf'", 
                                                            "'NaN'", "'TRUE'", 
                                                            "'FALSE'", "';'", 
                                                            "','", "'...'", 
                                                            "'.'" ];
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 276836424) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 1338245035) !== 0)) {
				{
				this.state = 25;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
				case 6:
				case 12:
				case 13:
				case 23:
				case 28:
				case 36:
				case 37:
				case 39:
				case 41:
				case 43:
				case 44:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
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
				case 66:
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
				this.match(RParser.T__5);
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
				if(!(_la===12 || _la===13)) {
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
				this.match(RParser.T__22);
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
				this.match(RParser.T__27);
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
				this.match(RParser.T__35);
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
				this.match(RParser.T__36);
				this.state = 48;
				this.exprlist();
				this.state = 49;
				this.match(RParser.T__37);
				}
				break;
			case 7:
				{
				localctx = new IfStatementContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 51;
				this.match(RParser.T__38);
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
				this.match(RParser.T__38);
				this.state = 58;
				this.match(RParser.T__2);
				this.state = 59;
				this.expr(0);
				this.state = 60;
				this.match(RParser.T__3);
				this.state = 61;
				this.expr(0);
				this.state = 62;
				this.match(RParser.T__39);
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
				this.match(RParser.T__40);
				this.state = 66;
				this.match(RParser.T__2);
				this.state = 67;
				this.expr(0);
				this.state = 68;
				this.match(RParser.T__41);
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
				this.match(RParser.T__42);
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
				this.match(RParser.T__43);
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
				this.match(RParser.T__44);
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
				this.match(RParser.T__45);
				}
				break;
			case 14:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 84;
				this.match(RParser.T__46);
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
				this.match(RParser.T__47);
				}
				break;
			case 23:
				{
				localctx = new SymbolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 96;
				this.match(RParser.T__48);
				}
				break;
			case 24:
				{
				localctx = new SymbolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 97;
				this.match(RParser.T__49);
				}
				break;
			case 25:
				{
				localctx = new SymbolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 98;
				this.match(RParser.T__50);
				}
				break;
			case 26:
				{
				localctx = new SymbolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 99;
				this.match(RParser.T__51);
				}
				break;
			case 27:
				{
				localctx = new SymbolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 100;
				this.match(RParser.T__52);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 169;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 167;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 103;
						if (!(this.precpred(this._ctx, 39))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 39)");
						}
						this.state = 104;
						_la = this._input.LA(1);
						if(!(_la===7 || _la===8)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 105;
						this.expr(40);
						}
						break;
					case 2:
						{
						localctx = new PropertyAccessContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 106;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 107;
						_la = this._input.LA(1);
						if(!(_la===9 || _la===10)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 108;
						this.expr(39);
						}
						break;
					case 3:
						{
						localctx = new PowerOfContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 109;
						if (!(this.precpred(this._ctx, 37))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 37)");
						}
						this.state = 110;
						this.match(RParser.T__10);
						this.state = 111;
						this.expr(37);
						}
						break;
					case 4:
						{
						localctx = new RangeDefinitionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 112;
						if (!(this.precpred(this._ctx, 35))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 35)");
						}
						this.state = 113;
						this.match(RParser.T__13);
						this.state = 114;
						this.expr(36);
						}
						break;
					case 5:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 115;
						if (!(this.precpred(this._ctx, 34))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
						}
						this.state = 116;
						this.match(RParser.USER_OP);
						this.state = 117;
						this.expr(35);
						}
						break;
					case 6:
						{
						localctx = new BasicCalculationContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 118;
						if (!(this.precpred(this._ctx, 33))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 33)");
						}
						this.state = 119;
						_la = this._input.LA(1);
						if(!(_la===15 || _la===16)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 120;
						this.expr(34);
						}
						break;
					case 7:
						{
						localctx = new BasicCalculationContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 121;
						if (!(this.precpred(this._ctx, 32))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 32)");
						}
						this.state = 122;
						_la = this._input.LA(1);
						if(!(_la===12 || _la===13)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 124;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===66) {
							{
							this.state = 123;
							this.match(RParser.NL);
							}
						}

						this.state = 126;
						this.expr(33);
						}
						break;
					case 8:
						{
						localctx = new ComparisonOperationContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 127;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 128;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 8257536) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 129;
						this.expr(32);
						}
						break;
					case 9:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 130;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 131;
						_la = this._input.LA(1);
						if(!(_la===24 || _la===25)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 132;
						this.expr(30);
						}
						break;
					case 10:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 133;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						this.state = 134;
						_la = this._input.LA(1);
						if(!(_la===26 || _la===27)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 135;
						this.expr(29);
						}
						break;
					case 11:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 136;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 137;
						this.match(RParser.T__27);
						this.state = 138;
						this.expr(27);
						}
						break;
					case 12:
						{
						localctx = new FunctionDefinitionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 139;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 140;
						this.match(RParser.T__28);
						this.state = 141;
						this.match(RParser.T__29);
						this.state = 142;
						this.match(RParser.T__2);
						this.state = 144;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 131) !== 0)) {
							{
							this.state = 143;
							this.formlist();
							}
						}

						this.state = 146;
						this.match(RParser.T__3);
						this.state = 147;
						this.expr(26);
						}
						break;
					case 13:
						{
						localctx = new VariableDeclarationContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 148;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 149;
						_la = this._input.LA(1);
						if(!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 125) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 150;
						this.expr(25);
						}
						break;
					case 14:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 151;
						if (!(this.precpred(this._ctx, 43))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 43)");
						}
						this.state = 152;
						this.match(RParser.T__0);
						this.state = 153;
						this.sublist();
						this.state = 154;
						this.match(RParser.T__1);
						this.state = 155;
						this.match(RParser.T__1);
						}
						break;
					case 15:
						{
						localctx = new FunctionCallContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 157;
						if (!(this.precpred(this._ctx, 42))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 42)");
						}
						this.state = 158;
						this.match(RParser.T__2);
						this.state = 159;
						this.sublist();
						this.state = 160;
						this.match(RParser.T__3);
						}
						break;
					case 16:
						{
						localctx = new ArrayItemContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 162;
						if (!(this.precpred(this._ctx, 41))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 41)");
						}
						this.state = 163;
						this.match(RParser.T__4);
						this.state = 164;
						this.sublist();
						this.state = 165;
						this.match(RParser.T__1);
						}
						break;
					}
					}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
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
			this.state = 189;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 6:
			case 12:
			case 13:
			case 23:
			case 28:
			case 36:
			case 37:
			case 39:
			case 41:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 66:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===66) {
					{
					this.state = 172;
					this.match(RParser.NL);
					}
				}

				this.state = 175;
				this.expr(0);
				this.state = 182;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 176;
						this.endOfStatement();
						this.state = 178;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 276836424) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 264503211) !== 0)) {
							{
							this.state = 177;
							this.expr(0);
							}
						}

						}
						}
					}
					this.state = 184;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===66) {
					{
					this.state = 185;
					this.match(RParser.NL);
					}
				}

				}
				break;
			case 38:
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
			this.state = 196;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 54:
				{
				{
				this.state = 191;
				this.match(RParser.T__53);
				this.state = 193;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 192;
					this.match(RParser.NL);
					}
					break;
				}
				}
				}
				break;
			case 66:
				{
				this.state = 195;
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
			this.state = 198;
			this.form();
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===55) {
				{
				{
				this.state = 199;
				this.match(RParser.T__54);
				this.state = 200;
				this.form();
				}
				}
				this.state = 205;
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
			this.state = 212;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 206;
				this.match(RParser.ID);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 207;
				this.match(RParser.ID);
				this.state = 208;
				this.match(RParser.T__31);
				this.state = 209;
				this.expr(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 210;
				this.match(RParser.T__55);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 211;
				this.match(RParser.T__56);
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
			this.state = 214;
			this.sub();
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===55) {
				{
				{
				this.state = 215;
				this.match(RParser.T__54);
				this.state = 216;
				this.sub();
				}
				}
				this.state = 221;
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
			this.state = 241;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 222;
				this.expr(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 223;
				this.match(RParser.ID);
				this.state = 224;
				this.match(RParser.T__31);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 225;
				this.match(RParser.ID);
				this.state = 226;
				this.match(RParser.T__31);
				this.state = 227;
				this.expr(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 228;
				this.match(RParser.STRING);
				this.state = 229;
				this.match(RParser.T__31);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 230;
				this.match(RParser.STRING);
				this.state = 231;
				this.match(RParser.T__31);
				this.state = 232;
				this.expr(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 233;
				this.match(RParser.T__47);
				this.state = 234;
				this.match(RParser.T__31);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 235;
				this.match(RParser.T__47);
				this.state = 236;
				this.match(RParser.T__31);
				this.state = 237;
				this.expr(0);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 238;
				this.match(RParser.T__55);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 239;
				this.match(RParser.T__56);
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
			return this.precpred(this._ctx, 39);
		case 1:
			return this.precpred(this._ctx, 38);
		case 2:
			return this.precpred(this._ctx, 37);
		case 3:
			return this.precpred(this._ctx, 35);
		case 4:
			return this.precpred(this._ctx, 34);
		case 5:
			return this.precpred(this._ctx, 33);
		case 6:
			return this.precpred(this._ctx, 32);
		case 7:
			return this.precpred(this._ctx, 31);
		case 8:
			return this.precpred(this._ctx, 29);
		case 9:
			return this.precpred(this._ctx, 28);
		case 10:
			return this.precpred(this._ctx, 26);
		case 11:
			return this.precpred(this._ctx, 25);
		case 12:
			return this.precpred(this._ctx, 24);
		case 13:
			return this.precpred(this._ctx, 43);
		case 14:
			return this.precpred(this._ctx, 42);
		case 15:
			return this.precpred(this._ctx, 41);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,67,244,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,5,0,20,
	8,0,10,0,12,0,23,9,0,1,0,5,0,26,8,0,10,0,12,0,29,9,0,1,0,1,0,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,102,8,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,3,1,125,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,3,1,145,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,168,8,1,10,1,12,1,171,9,1,1,2,
	3,2,174,8,2,1,2,1,2,1,2,3,2,179,8,2,5,2,181,8,2,10,2,12,2,184,9,2,1,2,3,
	2,187,8,2,1,2,3,2,190,8,2,1,3,1,3,3,3,194,8,3,1,3,3,3,197,8,3,1,4,1,4,1,
	4,5,4,202,8,4,10,4,12,4,205,9,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,213,8,5,1,6,
	1,6,1,6,5,6,218,8,6,10,6,12,6,221,9,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,242,8,7,1,7,0,1,2,8,0,2,4,
	6,8,10,12,14,0,8,1,0,12,13,1,0,7,8,1,0,9,10,1,0,15,16,1,0,17,22,1,0,24,
	25,1,0,26,27,2,0,29,29,31,35,304,0,27,1,0,0,0,2,101,1,0,0,0,4,189,1,0,0,
	0,6,196,1,0,0,0,8,198,1,0,0,0,10,212,1,0,0,0,12,214,1,0,0,0,14,241,1,0,
	0,0,16,21,3,2,1,0,17,20,3,6,3,0,18,20,5,66,0,0,19,17,1,0,0,0,19,18,1,0,
	0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,26,1,0,0,0,23,21,1,0,0,
	0,24,26,5,66,0,0,25,16,1,0,0,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,
	0,27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,0,0,1,31,1,1,0,0,0,
	32,33,6,1,-1,0,33,34,5,6,0,0,34,35,3,12,6,0,35,36,5,4,0,0,36,102,1,0,0,
	0,37,38,7,0,0,0,38,102,3,2,1,36,39,40,5,23,0,0,40,102,3,2,1,30,41,42,5,
	28,0,0,42,102,3,2,1,27,43,44,5,36,0,0,44,45,3,2,1,0,45,46,5,4,0,0,46,102,
	1,0,0,0,47,48,5,37,0,0,48,49,3,4,2,0,49,50,5,38,0,0,50,102,1,0,0,0,51,52,
	5,39,0,0,52,53,5,3,0,0,53,54,3,2,1,0,54,55,5,4,0,0,55,56,3,2,1,21,56,102,
	1,0,0,0,57,58,5,39,0,0,58,59,5,3,0,0,59,60,3,2,1,0,60,61,5,4,0,0,61,62,
	3,2,1,0,62,63,5,40,0,0,63,64,3,2,1,20,64,102,1,0,0,0,65,66,5,41,0,0,66,
	67,5,3,0,0,67,68,3,2,1,0,68,69,5,42,0,0,69,70,3,2,1,0,70,71,5,4,0,0,71,
	72,3,2,1,19,72,102,1,0,0,0,73,74,5,43,0,0,74,75,5,3,0,0,75,76,3,2,1,0,76,
	77,5,4,0,0,77,78,3,2,1,18,78,102,1,0,0,0,79,80,5,44,0,0,80,102,3,2,1,17,
	81,82,5,45,0,0,82,102,3,2,1,16,83,102,5,46,0,0,84,102,5,47,0,0,85,86,5,
	3,0,0,86,87,3,2,1,0,87,88,5,4,0,0,88,102,1,0,0,0,89,102,5,63,0,0,90,102,
	5,62,0,0,91,102,5,58,0,0,92,102,5,59,0,0,93,102,5,60,0,0,94,102,5,61,0,
	0,95,102,5,48,0,0,96,102,5,49,0,0,97,102,5,50,0,0,98,102,5,51,0,0,99,102,
	5,52,0,0,100,102,5,53,0,0,101,32,1,0,0,0,101,37,1,0,0,0,101,39,1,0,0,0,
	101,41,1,0,0,0,101,43,1,0,0,0,101,47,1,0,0,0,101,51,1,0,0,0,101,57,1,0,
	0,0,101,65,1,0,0,0,101,73,1,0,0,0,101,79,1,0,0,0,101,81,1,0,0,0,101,83,
	1,0,0,0,101,84,1,0,0,0,101,85,1,0,0,0,101,89,1,0,0,0,101,90,1,0,0,0,101,
	91,1,0,0,0,101,92,1,0,0,0,101,93,1,0,0,0,101,94,1,0,0,0,101,95,1,0,0,0,
	101,96,1,0,0,0,101,97,1,0,0,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,1,0,
	0,0,102,169,1,0,0,0,103,104,10,39,0,0,104,105,7,1,0,0,105,168,3,2,1,40,
	106,107,10,38,0,0,107,108,7,2,0,0,108,168,3,2,1,39,109,110,10,37,0,0,110,
	111,5,11,0,0,111,168,3,2,1,37,112,113,10,35,0,0,113,114,5,14,0,0,114,168,
	3,2,1,36,115,116,10,34,0,0,116,117,5,64,0,0,117,168,3,2,1,35,118,119,10,
	33,0,0,119,120,7,3,0,0,120,168,3,2,1,34,121,122,10,32,0,0,122,124,7,0,0,
	0,123,125,5,66,0,0,124,123,1,0,0,0,124,125,1,0,0,0,125,126,1,0,0,0,126,
	168,3,2,1,33,127,128,10,31,0,0,128,129,7,4,0,0,129,168,3,2,1,32,130,131,
	10,29,0,0,131,132,7,5,0,0,132,168,3,2,1,30,133,134,10,28,0,0,134,135,7,
	6,0,0,135,168,3,2,1,29,136,137,10,26,0,0,137,138,5,28,0,0,138,168,3,2,1,
	27,139,140,10,25,0,0,140,141,5,29,0,0,141,142,5,30,0,0,142,144,5,3,0,0,
	143,145,3,8,4,0,144,143,1,0,0,0,144,145,1,0,0,0,145,146,1,0,0,0,146,147,
	5,4,0,0,147,168,3,2,1,26,148,149,10,24,0,0,149,150,7,7,0,0,150,168,3,2,
	1,25,151,152,10,43,0,0,152,153,5,1,0,0,153,154,3,12,6,0,154,155,5,2,0,0,
	155,156,5,2,0,0,156,168,1,0,0,0,157,158,10,42,0,0,158,159,5,3,0,0,159,160,
	3,12,6,0,160,161,5,4,0,0,161,168,1,0,0,0,162,163,10,41,0,0,163,164,5,5,
	0,0,164,165,3,12,6,0,165,166,5,2,0,0,166,168,1,0,0,0,167,103,1,0,0,0,167,
	106,1,0,0,0,167,109,1,0,0,0,167,112,1,0,0,0,167,115,1,0,0,0,167,118,1,0,
	0,0,167,121,1,0,0,0,167,127,1,0,0,0,167,130,1,0,0,0,167,133,1,0,0,0,167,
	136,1,0,0,0,167,139,1,0,0,0,167,148,1,0,0,0,167,151,1,0,0,0,167,157,1,0,
	0,0,167,162,1,0,0,0,168,171,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,
	3,1,0,0,0,171,169,1,0,0,0,172,174,5,66,0,0,173,172,1,0,0,0,173,174,1,0,
	0,0,174,175,1,0,0,0,175,182,3,2,1,0,176,178,3,6,3,0,177,179,3,2,1,0,178,
	177,1,0,0,0,178,179,1,0,0,0,179,181,1,0,0,0,180,176,1,0,0,0,181,184,1,0,
	0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,186,1,0,0,0,184,182,1,0,0,0,185,
	187,5,66,0,0,186,185,1,0,0,0,186,187,1,0,0,0,187,190,1,0,0,0,188,190,1,
	0,0,0,189,173,1,0,0,0,189,188,1,0,0,0,190,5,1,0,0,0,191,193,5,54,0,0,192,
	194,5,66,0,0,193,192,1,0,0,0,193,194,1,0,0,0,194,197,1,0,0,0,195,197,5,
	66,0,0,196,191,1,0,0,0,196,195,1,0,0,0,197,7,1,0,0,0,198,203,3,10,5,0,199,
	200,5,55,0,0,200,202,3,10,5,0,201,199,1,0,0,0,202,205,1,0,0,0,203,201,1,
	0,0,0,203,204,1,0,0,0,204,9,1,0,0,0,205,203,1,0,0,0,206,213,5,63,0,0,207,
	208,5,63,0,0,208,209,5,32,0,0,209,213,3,2,1,0,210,213,5,56,0,0,211,213,
	5,57,0,0,212,206,1,0,0,0,212,207,1,0,0,0,212,210,1,0,0,0,212,211,1,0,0,
	0,213,11,1,0,0,0,214,219,3,14,7,0,215,216,5,55,0,0,216,218,3,14,7,0,217,
	215,1,0,0,0,218,221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,13,1,0,
	0,0,221,219,1,0,0,0,222,242,3,2,1,0,223,224,5,63,0,0,224,242,5,32,0,0,225,
	226,5,63,0,0,226,227,5,32,0,0,227,242,3,2,1,0,228,229,5,62,0,0,229,242,
	5,32,0,0,230,231,5,62,0,0,231,232,5,32,0,0,232,242,3,2,1,0,233,234,5,48,
	0,0,234,242,5,32,0,0,235,236,5,48,0,0,236,237,5,32,0,0,237,242,3,2,1,0,
	238,242,5,56,0,0,239,242,5,57,0,0,240,242,1,0,0,0,241,222,1,0,0,0,241,223,
	1,0,0,0,241,225,1,0,0,0,241,228,1,0,0,0,241,230,1,0,0,0,241,233,1,0,0,0,
	241,235,1,0,0,0,241,238,1,0,0,0,241,239,1,0,0,0,241,240,1,0,0,0,242,15,
	1,0,0,0,20,19,21,25,27,101,124,144,167,169,173,178,182,186,189,193,196,
	203,212,219,241];

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
