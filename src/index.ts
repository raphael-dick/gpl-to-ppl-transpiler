import antlr from 'antlr4'
import Lexer from '../lib/RLexer'
import Parser from '../lib/RParser'
import RVisitor from './visitors/RVisitor';
import PythonGenerator from './generators/PythonGenerator';

// const input = `
// myString <- "Hello, World!"
// `;

const expressions = [
  'myString <- "Hello, World!"',
  'print ( myString)',
  'print ( "test")',
// 'TRUE',
// '"Hello, World!"',
]

const input = expressions.join('\n')


const chars = new antlr.CharStream(input);
const lexer = new Lexer(chars);

const tokens = new antlr.CommonTokenStream(lexer);

const parser = new Parser(tokens);
const tree = parser.prog();

const gen = new RVisitor( new PythonGenerator() )
const output = gen.start( tree )

console.log("\n---------");
console.log("| INPUT |");
console.log("---------");
console.log(input);
console.log("\n----------");
console.log("| OUTPUT |");
console.log("----------");
console.log(output);

// console.log(tree.toStringTree(parser.ruleNames, null));