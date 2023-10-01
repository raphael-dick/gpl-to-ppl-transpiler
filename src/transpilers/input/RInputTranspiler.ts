import Transpiler from '@src/interfaces/Transpiler'
import antlr from 'antlr4'
import Lexer from '@lib/RLexer'
import Parser from '@lib/RParser'
import RVisitor from '@visitors/languages/RVisitor'

export default abstract class RInputTranspiler extends Transpiler {
  protected transpile() {
    const chars = new antlr.CharStream(this.input)
    const lexer = new Lexer(chars)

    const tokens = new antlr.CommonTokenStream(lexer)

    const parser = new Parser(tokens)
    const tree = parser.prog()

    const gen = new RVisitor(this.generator, this.apis)
    const output = gen.start(tree)

    return output
  }
}
