/*
 [The "BSD licence"] Copyright (c) 2013 Terence Parr All rights reserved.
 
 Redistribution and use in source and binary forms, with or without modification, are permitted
 provided that the following conditions are met: 1. Redistributions of source code must retain the
 above copyright notice, this list of conditions and the following disclaimer. 2. Redistributions in
 binary form must reproduce the above copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided with the distribution. 3. The name
 of the author may not be used to endorse or promote products derived from this software without
 specific prior written permission.
 
 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING,
 BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
 */

/**
 derived from http://svn.r-project.org/R/trunk/src/main/gram.y
 http://cran.r-project.org/doc/manuals/R-lang.html#Parser
 
 I'm no R genius but this seems to work.
 
 Requires RFilter.g4 to strip away NL that are really whitespace, not end-of-command. See TestR.java
 Usage:
 
 $ antlr4 R.g4 RFilter.g4 $ javac *.java $ java TestR sample.R ... prints parse tree ...
 */
grammar R;

prog: ( expr (endOfStatement | NL)* | NL)* EOF;

/*
 expr_or_assign : expr ('<-'|'='|'<<-') expr_or_assign | expr ;
 */

expr:
	expr '[[' sublist ']' ']'								# UnhandeledExpression // '[[' follows R's yacc grammar
	| expr '(' (NL)? sublist (NL)? ')'						# FunctionCall // call function
	| expr '[-c(' expr ':' expr ')]'						# ArraySubset
	| expr '[' (sub ',' sublist) ']' ('<-' | '=') expr		# MatrixItemAssignment
	| expr '[' sublist ']'									# ArrayItem
	| 'c(' sublist ')'										# CFunction
	| expr ('::' | ':::') expr								# UnhandeledExpression
	| expr ('$' | '@') expr									# PropertyAccess
	| <assoc = right> expr '^' expr							# PowerOf
	| ('-' | '+') expr										# Sign
	| expr ':' expr											# RangeDefinition
	| expr USER_OP expr										# UnhandeledExpression // anything wrappedin %: '%' .* '%'
	| expr ('*' | '/') expr									# BasicCalculation
	| expr ('+' | '-') (NL)? expr							# BasicCalculation
	| expr ('>' | '>=' | '<' | '<=' | '==' | '!=') expr		# ComparisonOperation
	| '!' expr												# UnhandeledExpression
	| expr ('&' | '&&') expr								# UnhandeledExpression
	| expr ('|' | '||') expr								# UnhandeledExpression
	| '~' expr												# UnhandeledExpression
	| expr '~' expr											# UnhandeledExpression
	| expr '<-' 'function' '(' formlist? ')' expr			# FunctionDefinition // define function
	| expr ('<-' | '<<-' | '=' | '->' | '->>' | ':=') expr	# VariableDeclaration
	| 'return(' expr ')'									# ReturnStatement // return statement
	| '{' exprlist '}'										# Block // compound statement
	| 'if' '(' expr ')' expr								# IfStatement
	| 'if' '(' expr ')' expr 'else' expr					# IfElseStatement // TODO: add "else if"
	| 'for' '(' expr 'in' expr ')' expr						# ForLoop
	| 'while' '(' expr ')' expr								# WhileLoop
	| 'repeat' expr											# UnhandeledExpression
	| '?' expr												# UnhandeledExpression // get help on expr, usually string or ID
	| 'next'												# UnhandeledExpression
	| 'break'												# UnhandeledExpression
	| '(' expr ')'											# Group
	| ID													# Id // e.g. Variable Names
	| STRING												# String
	| HEX													# UnhandeledExpression
	| INT													# Int
	| FLOAT													# Float
	| COMPLEX												# UnhandeledExpression
	| 'NULL'												# Symbol
	| 'NA'													# Symbol
	| 'Inf'													# Symbol
	| 'NaN'													# Symbol
	| 'TRUE'												# Symbol
	| 'FALSE'												# Symbol;

exprlist: NL? expr (endOfStatement expr?)* NL? |;

endOfStatement: ((';' NL?) | NL);

formlist: form (',' form)*;

form: ID | ID '=' expr | '...' | '.';

sublist: sub (',' (NL?) sub)*;

sub:
	expr
	| ID '='
	| ID '=' expr
	| STRING '='
	| STRING '=' expr
	| 'NULL' '='
	| 'NULL' '=' expr
	| '...'
	| '.'
	|;

HEX: '0' ('x' | 'X') HEXDIGIT+ [Ll]?;

INT: DIGIT+ [Ll]?;

fragment HEXDIGIT: ('0' ..'9' | 'a' ..'f' | 'A' ..'F');

FLOAT:
	DIGIT+ '.' DIGIT* EXP? [Ll]?
	| DIGIT+ EXP? [Ll]?
	| '.' DIGIT+ EXP? [Ll]?;
fragment DIGIT: '0' ..'9';
fragment EXP: ('E' | 'e') ('+' | '-')? INT;

COMPLEX: INT 'i' | FLOAT 'i';

STRING:
	'"' (ESC | ~[\\"])*? '"'
	| '\'' ( ESC | ~[\\'])*? '\''
	| '`' ( ESC | ~[\\'])*? '`';

fragment ESC:
	'\\' [abtnfrv"'\\]
	| UNICODE_ESCAPE
	| HEX_ESCAPE
	| OCTAL_ESCAPE;

fragment UNICODE_ESCAPE:
	'\\' 'u' HEXDIGIT HEXDIGIT HEXDIGIT HEXDIGIT
	| '\\' 'u' '{' HEXDIGIT HEXDIGIT HEXDIGIT HEXDIGIT '}';

fragment OCTAL_ESCAPE:
	'\\' [0-3] [0-7] [0-7]
	| '\\' [0-7] [0-7]
	| '\\' [0-7];

fragment HEX_ESCAPE: '\\' HEXDIGIT HEXDIGIT?;

ID:
	'.' (LETTER | '_' | '.') (LETTER | DIGIT | '_' | '.')*
	| LETTER (LETTER | DIGIT | '_' | '.')*;

fragment LETTER: [a-zA-Z];

USER_OP: '%' .*? '%';

COMMENT: '#' .*? '\r'? '\n' -> skip;

// Match both UNIX and Windows newlines
NL: '\r'? '\n';

WS: [ \t\u000C]+ -> skip;