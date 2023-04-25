import ApiVisitor from '@interfaces/ApiVisitor.ts';
import IntermediateVisitor from '@interfaces/IntermediateVisitor';
import antlr from 'antlr4'
import Lexer from '@lib/RLexer'
import Parser from '@lib/RParser'
import RVisitor from '@visitors/languages/RVisitor';

/**
 * Transpile R code into the supplied output language using the generators and supplies apis
 * 
 * @param input the input code which gets transpiled
 * @param generator an generator for generating the output code
 * @param apis a list of apis which are transpiled (in addition to basic language features)
 * 
 * @returns the output code in the given output language with transpiled api codes 
 */
export async function transpile(input: string, generator: IntermediateVisitor, apis: ApiVisitor[]) {
  const chars = new antlr.CharStream(input);
  const lexer = new Lexer(chars);

  const tokens = new antlr.CommonTokenStream(lexer);

  const parser = new Parser(tokens);
  const tree = parser.prog();

  const gen = new RVisitor( generator, apis )
  const output = gen.start( tree )

  return output
}