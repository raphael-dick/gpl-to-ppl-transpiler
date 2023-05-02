// Generated from grammars/R.g4 by ANTLR 4.12.0
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
	public static readonly HEX = 57;
	public static readonly INT = 58;
	public static readonly FLOAT = 59;
	public static readonly COMPLEX = 60;
	public static readonly STRING = 61;
	public static readonly ID = 62;
	public static readonly USER_OP = 63;
	public static readonly NL = 64;
	public static readonly WS = 65;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_exprlist = 2;
	public static readonly RULE_formlist = 3;
	public static readonly RULE_form = 4;
	public static readonly RULE_sublist = 5;
	public static readonly RULE_sub = 6;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'[['", "']'", 
                                                            "'['", "'::'", 
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
                                                            "'<<-'", "'='", 
                                                            "'->'", "'->>'", 
                                                            "':='", "'function'", 
                                                            "'('", "')'", 
                                                            "'return('", 
                                                            "'{'", "'}'", 
                                                            "'if'", "'else'", 
                                                            "'for'", "'in'", 
                                                            "'while'", "'repeat'", 
                                                            "'?'", "'next'", 
                                                            "'break'", "'NULL'", 
                                                            "'NA'", "'Inf'", 
                                                            "'NaN'", "'TRUE'", 
                                                            "'FALSE'", "','", 
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
                                                             null, "HEX", 
                                                             "INT", "FLOAT", 
                                                             "COMPLEX", 
                                                             "STRING", "ID", 
                                                             "USER_OP", 
                                                             "NL", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "expr", "exprlist", "formlist", "form", "sublist", "sub",
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
			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 69209088) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 1603272365) !== 0)) {
				{
				this.state = 22;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 10:
				case 11:
				case 21:
				case 26:
				case 34:
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
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
					{
					this.state = 14;
					this.expr(0);
					this.state = 18;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 15;
							_la = this._input.LA(1);
							if(!(_la===1 || _la===64)) {
							this._errHandler.recoverInline(this);
							}
							else {
								this._errHandler.reportMatch(this);
							    this.consume();
							}
							}
							}
						}
						this.state = 20;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
					}
					}
					break;
				case 64:
					{
					this.state = 21;
					this.match(RParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 26;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 27;
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
			this.state = 94;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 30;
				_la = this._input.LA(1);
				if(!(_la===10 || _la===11)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 31;
				this.expr(37);
				}
				break;
			case 2:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 32;
				this.match(RParser.T__20);
				this.state = 33;
				this.expr(31);
				}
				break;
			case 3:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 34;
				this.match(RParser.T__25);
				this.state = 35;
				this.expr(28);
				}
				break;
			case 4:
				{
				localctx = new ReturnStatementContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 36;
				this.match(RParser.T__35);
				this.state = 37;
				this.expr(0);
				this.state = 38;
				this.match(RParser.T__34);
				}
				break;
			case 5:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 40;
				this.match(RParser.T__36);
				this.state = 41;
				this.exprlist();
				this.state = 42;
				this.match(RParser.T__37);
				}
				break;
			case 6:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 44;
				this.match(RParser.T__38);
				this.state = 45;
				this.match(RParser.T__33);
				this.state = 46;
				this.expr(0);
				this.state = 47;
				this.match(RParser.T__34);
				this.state = 48;
				this.expr(21);
				}
				break;
			case 7:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 50;
				this.match(RParser.T__38);
				this.state = 51;
				this.match(RParser.T__33);
				this.state = 52;
				this.expr(0);
				this.state = 53;
				this.match(RParser.T__34);
				this.state = 54;
				this.expr(0);
				this.state = 55;
				this.match(RParser.T__39);
				this.state = 56;
				this.expr(20);
				}
				break;
			case 8:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 58;
				this.match(RParser.T__40);
				this.state = 59;
				this.match(RParser.T__33);
				this.state = 60;
				this.match(RParser.ID);
				this.state = 61;
				this.match(RParser.T__41);
				this.state = 62;
				this.expr(0);
				this.state = 63;
				this.match(RParser.T__34);
				this.state = 64;
				this.expr(19);
				}
				break;
			case 9:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 66;
				this.match(RParser.T__42);
				this.state = 67;
				this.match(RParser.T__33);
				this.state = 68;
				this.expr(0);
				this.state = 69;
				this.match(RParser.T__34);
				this.state = 70;
				this.expr(18);
				}
				break;
			case 10:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 72;
				this.match(RParser.T__43);
				this.state = 73;
				this.expr(17);
				}
				break;
			case 11:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 74;
				this.match(RParser.T__44);
				this.state = 75;
				this.expr(16);
				}
				break;
			case 12:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 76;
				this.match(RParser.T__45);
				}
				break;
			case 13:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 77;
				this.match(RParser.T__46);
				}
				break;
			case 14:
				{
				localctx = new GroupContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 78;
				this.match(RParser.T__33);
				this.state = 79;
				this.expr(0);
				this.state = 80;
				this.match(RParser.T__34);
				}
				break;
			case 15:
				{
				localctx = new IdContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 82;
				this.match(RParser.ID);
				}
				break;
			case 16:
				{
				localctx = new StringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 83;
				this.match(RParser.STRING);
				}
				break;
			case 17:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 84;
				this.match(RParser.HEX);
				}
				break;
			case 18:
				{
				localctx = new IntContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 85;
				this.match(RParser.INT);
				}
				break;
			case 19:
				{
				localctx = new FloatContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 86;
				this.match(RParser.FLOAT);
				}
				break;
			case 20:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 87;
				this.match(RParser.COMPLEX);
				}
				break;
			case 21:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 88;
				this.match(RParser.T__47);
				}
				break;
			case 22:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 89;
				this.match(RParser.T__48);
				}
				break;
			case 23:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 90;
				this.match(RParser.T__49);
				}
				break;
			case 24:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 91;
				this.match(RParser.T__50);
				}
				break;
			case 25:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 92;
				this.match(RParser.T__51);
				}
				break;
			case 26:
				{
				localctx = new UnhandeledExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 93;
				this.match(RParser.T__52);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 159;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 157;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 96;
						if (!(this.precpred(this._ctx, 40))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 40)");
						}
						this.state = 97;
						_la = this._input.LA(1);
						if(!(_la===5 || _la===6)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 98;
						this.expr(41);
						}
						break;
					case 2:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 99;
						if (!(this.precpred(this._ctx, 39))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 39)");
						}
						this.state = 100;
						_la = this._input.LA(1);
						if(!(_la===7 || _la===8)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 101;
						this.expr(40);
						}
						break;
					case 3:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 102;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 103;
						this.match(RParser.T__8);
						this.state = 104;
						this.expr(38);
						}
						break;
					case 4:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 105;
						if (!(this.precpred(this._ctx, 36))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 36)");
						}
						this.state = 106;
						this.match(RParser.T__11);
						this.state = 107;
						this.expr(37);
						}
						break;
					case 5:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 108;
						if (!(this.precpred(this._ctx, 35))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 35)");
						}
						this.state = 109;
						this.match(RParser.USER_OP);
						this.state = 110;
						this.expr(36);
						}
						break;
					case 6:
						{
						localctx = new BasicCalculationContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 111;
						if (!(this.precpred(this._ctx, 34))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
						}
						this.state = 112;
						_la = this._input.LA(1);
						if(!(_la===13 || _la===14)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 113;
						this.expr(35);
						}
						break;
					case 7:
						{
						localctx = new BasicCalculationContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 114;
						if (!(this.precpred(this._ctx, 33))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 33)");
						}
						this.state = 115;
						_la = this._input.LA(1);
						if(!(_la===10 || _la===11)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 116;
						this.expr(34);
						}
						break;
					case 8:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 117;
						if (!(this.precpred(this._ctx, 32))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 32)");
						}
						this.state = 118;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064384) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 119;
						this.expr(33);
						}
						break;
					case 9:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 120;
						if (!(this.precpred(this._ctx, 30))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 30)");
						}
						this.state = 121;
						_la = this._input.LA(1);
						if(!(_la===22 || _la===23)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 122;
						this.expr(31);
						}
						break;
					case 10:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 123;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 124;
						_la = this._input.LA(1);
						if(!(_la===24 || _la===25)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 125;
						this.expr(30);
						}
						break;
					case 11:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 126;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 127;
						this.match(RParser.T__25);
						this.state = 128;
						this.expr(28);
						}
						break;
					case 12:
						{
						localctx = new VariableDeclarationContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 129;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 130;
						_la = this._input.LA(1);
						if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 63) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 131;
						this.expr(27);
						}
						break;
					case 13:
						{
						localctx = new FunctionDefinitionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 132;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 133;
						this.match(RParser.T__26);
						this.state = 134;
						this.match(RParser.T__32);
						this.state = 135;
						this.match(RParser.T__33);
						this.state = 137;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 131) !== 0)) {
							{
							this.state = 136;
							this.formlist();
							}
						}

						this.state = 139;
						this.match(RParser.T__34);
						this.state = 140;
						this.expr(26);
						}
						break;
					case 14:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 141;
						if (!(this.precpred(this._ctx, 42))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 42)");
						}
						this.state = 142;
						this.match(RParser.T__1);
						this.state = 143;
						this.sublist();
						this.state = 144;
						this.match(RParser.T__2);
						this.state = 145;
						this.match(RParser.T__2);
						}
						break;
					case 15:
						{
						localctx = new UnhandeledExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 147;
						if (!(this.precpred(this._ctx, 41))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 41)");
						}
						this.state = 148;
						this.match(RParser.T__3);
						this.state = 149;
						this.sublist();
						this.state = 150;
						this.match(RParser.T__2);
						}
						break;
					case 16:
						{
						localctx = new FunctionCallContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
						this.state = 152;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 153;
						this.match(RParser.T__33);
						this.state = 154;
						this.sublist();
						this.state = 155;
						this.match(RParser.T__34);
						}
						break;
					}
					}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
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
			this.state = 173;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
			case 11:
			case 21:
			case 26:
			case 34:
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
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 162;
				this.expr(0);
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1 || _la===64) {
					{
					{
					this.state = 163;
					_la = this._input.LA(1);
					if(!(_la===1 || _la===64)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 69209088) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 529530541) !== 0)) {
						{
						this.state = 164;
						this.expr(0);
						}
					}

					}
					}
					this.state = 171;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public formlist(): FormlistContext {
		let localctx: FormlistContext = new FormlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, RParser.RULE_formlist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 175;
			this.form();
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===54) {
				{
				{
				this.state = 176;
				this.match(RParser.T__53);
				this.state = 177;
				this.form();
				}
				}
				this.state = 182;
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
		this.enterRule(localctx, 8, RParser.RULE_form);
		try {
			this.state = 189;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 183;
				this.match(RParser.ID);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 184;
				this.match(RParser.ID);
				this.state = 185;
				this.match(RParser.T__28);
				this.state = 186;
				this.expr(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 187;
				this.match(RParser.T__54);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 188;
				this.match(RParser.T__55);
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
		this.enterRule(localctx, 10, RParser.RULE_sublist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 191;
			this.sub();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===54) {
				{
				{
				this.state = 192;
				this.match(RParser.T__53);
				this.state = 193;
				this.sub();
				}
				}
				this.state = 198;
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
		this.enterRule(localctx, 12, RParser.RULE_sub);
		try {
			this.state = 218;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 199;
				this.expr(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 200;
				this.match(RParser.ID);
				this.state = 201;
				this.match(RParser.T__28);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 202;
				this.match(RParser.ID);
				this.state = 203;
				this.match(RParser.T__28);
				this.state = 204;
				this.expr(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 205;
				this.match(RParser.STRING);
				this.state = 206;
				this.match(RParser.T__28);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 207;
				this.match(RParser.STRING);
				this.state = 208;
				this.match(RParser.T__28);
				this.state = 209;
				this.expr(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 210;
				this.match(RParser.T__47);
				this.state = 211;
				this.match(RParser.T__28);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 212;
				this.match(RParser.T__47);
				this.state = 213;
				this.match(RParser.T__28);
				this.state = 214;
				this.expr(0);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 215;
				this.match(RParser.T__54);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 216;
				this.match(RParser.T__55);
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
			return this.precpred(this._ctx, 40);
		case 1:
			return this.precpred(this._ctx, 39);
		case 2:
			return this.precpred(this._ctx, 38);
		case 3:
			return this.precpred(this._ctx, 36);
		case 4:
			return this.precpred(this._ctx, 35);
		case 5:
			return this.precpred(this._ctx, 34);
		case 6:
			return this.precpred(this._ctx, 33);
		case 7:
			return this.precpred(this._ctx, 32);
		case 8:
			return this.precpred(this._ctx, 30);
		case 9:
			return this.precpred(this._ctx, 29);
		case 10:
			return this.precpred(this._ctx, 27);
		case 11:
			return this.precpred(this._ctx, 26);
		case 12:
			return this.precpred(this._ctx, 25);
		case 13:
			return this.precpred(this._ctx, 42);
		case 14:
			return this.precpred(this._ctx, 41);
		case 15:
			return this.precpred(this._ctx, 23);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,65,221,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,1,0,5,0,17,8,0,10,0,12,
	0,20,9,0,1,0,5,0,23,8,0,10,0,12,0,26,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,3,1,95,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,138,8,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,158,
	8,1,10,1,12,1,161,9,1,1,2,1,2,1,2,3,2,166,8,2,5,2,168,8,2,10,2,12,2,171,
	9,2,1,2,3,2,174,8,2,1,3,1,3,1,3,5,3,179,8,3,10,3,12,3,182,9,3,1,4,1,4,1,
	4,1,4,1,4,1,4,3,4,190,8,4,1,5,1,5,1,5,5,5,195,8,5,10,5,12,5,198,9,5,1,6,
	1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
	3,6,219,8,6,1,6,0,1,2,7,0,2,4,6,8,10,12,0,9,2,0,1,1,64,64,1,0,10,11,1,0,
	5,6,1,0,7,8,1,0,13,14,1,0,15,20,1,0,22,23,1,0,24,25,1,0,27,32,275,0,24,
	1,0,0,0,2,94,1,0,0,0,4,173,1,0,0,0,6,175,1,0,0,0,8,189,1,0,0,0,10,191,1,
	0,0,0,12,218,1,0,0,0,14,18,3,2,1,0,15,17,7,0,0,0,16,15,1,0,0,0,17,20,1,
	0,0,0,18,16,1,0,0,0,18,19,1,0,0,0,19,23,1,0,0,0,20,18,1,0,0,0,21,23,5,64,
	0,0,22,14,1,0,0,0,22,21,1,0,0,0,23,26,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,
	0,25,27,1,0,0,0,26,24,1,0,0,0,27,28,5,0,0,1,28,1,1,0,0,0,29,30,6,1,-1,0,
	30,31,7,1,0,0,31,95,3,2,1,37,32,33,5,21,0,0,33,95,3,2,1,31,34,35,5,26,0,
	0,35,95,3,2,1,28,36,37,5,36,0,0,37,38,3,2,1,0,38,39,5,35,0,0,39,95,1,0,
	0,0,40,41,5,37,0,0,41,42,3,4,2,0,42,43,5,38,0,0,43,95,1,0,0,0,44,45,5,39,
	0,0,45,46,5,34,0,0,46,47,3,2,1,0,47,48,5,35,0,0,48,49,3,2,1,21,49,95,1,
	0,0,0,50,51,5,39,0,0,51,52,5,34,0,0,52,53,3,2,1,0,53,54,5,35,0,0,54,55,
	3,2,1,0,55,56,5,40,0,0,56,57,3,2,1,20,57,95,1,0,0,0,58,59,5,41,0,0,59,60,
	5,34,0,0,60,61,5,62,0,0,61,62,5,42,0,0,62,63,3,2,1,0,63,64,5,35,0,0,64,
	65,3,2,1,19,65,95,1,0,0,0,66,67,5,43,0,0,67,68,5,34,0,0,68,69,3,2,1,0,69,
	70,5,35,0,0,70,71,3,2,1,18,71,95,1,0,0,0,72,73,5,44,0,0,73,95,3,2,1,17,
	74,75,5,45,0,0,75,95,3,2,1,16,76,95,5,46,0,0,77,95,5,47,0,0,78,79,5,34,
	0,0,79,80,3,2,1,0,80,81,5,35,0,0,81,95,1,0,0,0,82,95,5,62,0,0,83,95,5,61,
	0,0,84,95,5,57,0,0,85,95,5,58,0,0,86,95,5,59,0,0,87,95,5,60,0,0,88,95,5,
	48,0,0,89,95,5,49,0,0,90,95,5,50,0,0,91,95,5,51,0,0,92,95,5,52,0,0,93,95,
	5,53,0,0,94,29,1,0,0,0,94,32,1,0,0,0,94,34,1,0,0,0,94,36,1,0,0,0,94,40,
	1,0,0,0,94,44,1,0,0,0,94,50,1,0,0,0,94,58,1,0,0,0,94,66,1,0,0,0,94,72,1,
	0,0,0,94,74,1,0,0,0,94,76,1,0,0,0,94,77,1,0,0,0,94,78,1,0,0,0,94,82,1,0,
	0,0,94,83,1,0,0,0,94,84,1,0,0,0,94,85,1,0,0,0,94,86,1,0,0,0,94,87,1,0,0,
	0,94,88,1,0,0,0,94,89,1,0,0,0,94,90,1,0,0,0,94,91,1,0,0,0,94,92,1,0,0,0,
	94,93,1,0,0,0,95,159,1,0,0,0,96,97,10,40,0,0,97,98,7,2,0,0,98,158,3,2,1,
	41,99,100,10,39,0,0,100,101,7,3,0,0,101,158,3,2,1,40,102,103,10,38,0,0,
	103,104,5,9,0,0,104,158,3,2,1,38,105,106,10,36,0,0,106,107,5,12,0,0,107,
	158,3,2,1,37,108,109,10,35,0,0,109,110,5,63,0,0,110,158,3,2,1,36,111,112,
	10,34,0,0,112,113,7,4,0,0,113,158,3,2,1,35,114,115,10,33,0,0,115,116,7,
	1,0,0,116,158,3,2,1,34,117,118,10,32,0,0,118,119,7,5,0,0,119,158,3,2,1,
	33,120,121,10,30,0,0,121,122,7,6,0,0,122,158,3,2,1,31,123,124,10,29,0,0,
	124,125,7,7,0,0,125,158,3,2,1,30,126,127,10,27,0,0,127,128,5,26,0,0,128,
	158,3,2,1,28,129,130,10,26,0,0,130,131,7,8,0,0,131,158,3,2,1,27,132,133,
	10,25,0,0,133,134,5,27,0,0,134,135,5,33,0,0,135,137,5,34,0,0,136,138,3,
	6,3,0,137,136,1,0,0,0,137,138,1,0,0,0,138,139,1,0,0,0,139,140,5,35,0,0,
	140,158,3,2,1,26,141,142,10,42,0,0,142,143,5,2,0,0,143,144,3,10,5,0,144,
	145,5,3,0,0,145,146,5,3,0,0,146,158,1,0,0,0,147,148,10,41,0,0,148,149,5,
	4,0,0,149,150,3,10,5,0,150,151,5,3,0,0,151,158,1,0,0,0,152,153,10,23,0,
	0,153,154,5,34,0,0,154,155,3,10,5,0,155,156,5,35,0,0,156,158,1,0,0,0,157,
	96,1,0,0,0,157,99,1,0,0,0,157,102,1,0,0,0,157,105,1,0,0,0,157,108,1,0,0,
	0,157,111,1,0,0,0,157,114,1,0,0,0,157,117,1,0,0,0,157,120,1,0,0,0,157,123,
	1,0,0,0,157,126,1,0,0,0,157,129,1,0,0,0,157,132,1,0,0,0,157,141,1,0,0,0,
	157,147,1,0,0,0,157,152,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,159,160,
	1,0,0,0,160,3,1,0,0,0,161,159,1,0,0,0,162,169,3,2,1,0,163,165,7,0,0,0,164,
	166,3,2,1,0,165,164,1,0,0,0,165,166,1,0,0,0,166,168,1,0,0,0,167,163,1,0,
	0,0,168,171,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,174,1,0,0,0,171,
	169,1,0,0,0,172,174,1,0,0,0,173,162,1,0,0,0,173,172,1,0,0,0,174,5,1,0,0,
	0,175,180,3,8,4,0,176,177,5,54,0,0,177,179,3,8,4,0,178,176,1,0,0,0,179,
	182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,7,1,0,0,0,182,180,1,0,0,
	0,183,190,5,62,0,0,184,185,5,62,0,0,185,186,5,29,0,0,186,190,3,2,1,0,187,
	190,5,55,0,0,188,190,5,56,0,0,189,183,1,0,0,0,189,184,1,0,0,0,189,187,1,
	0,0,0,189,188,1,0,0,0,190,9,1,0,0,0,191,196,3,12,6,0,192,193,5,54,0,0,193,
	195,3,12,6,0,194,192,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,1,
	0,0,0,197,11,1,0,0,0,198,196,1,0,0,0,199,219,3,2,1,0,200,201,5,62,0,0,201,
	219,5,29,0,0,202,203,5,62,0,0,203,204,5,29,0,0,204,219,3,2,1,0,205,206,
	5,61,0,0,206,219,5,29,0,0,207,208,5,61,0,0,208,209,5,29,0,0,209,219,3,2,
	1,0,210,211,5,48,0,0,211,219,5,29,0,0,212,213,5,48,0,0,213,214,5,29,0,0,
	214,219,3,2,1,0,215,219,5,55,0,0,216,219,5,56,0,0,217,219,1,0,0,0,218,199,
	1,0,0,0,218,200,1,0,0,0,218,202,1,0,0,0,218,205,1,0,0,0,218,207,1,0,0,0,
	218,210,1,0,0,0,218,212,1,0,0,0,218,215,1,0,0,0,218,216,1,0,0,0,218,217,
	1,0,0,0,219,13,1,0,0,0,14,18,22,24,94,137,157,159,165,169,173,180,189,196,
	218];

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
	public exprlist(): ExprlistContext {
		return this.getTypedRuleContext(ExprlistContext, 0) as ExprlistContext;
	}
	public ID(): TerminalNode {
		return this.getToken(RParser.ID, 0);
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
