import IntermediateVisitor from '/src/interfaces/IntermediateVisitor';
import antlr from 'antlr4'
import Lexer from '../../lib/RLexer'
import Parser from '../../lib/RParser'
import RVisitor from '../visitors/RVisitor';

export async function transpile(input: string, generator: IntermediateVisitor) {
  const chars = new antlr.CharStream(input);
  const lexer = new Lexer(chars);

  const tokens = new antlr.CommonTokenStream(lexer);

  const parser = new Parser(tokens);
  const tree = parser.prog();

  const gen = new RVisitor( generator )
  const output = gen.start( tree )

  return output
}