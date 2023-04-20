import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import PythonStandardApiGenerator from './generators/apis/PythonStandardApiGenerator';
import PythonStatisticsApiGenerator from './generators/apis/PythonStatisticsApiGenerator';
import PythonGenerator from './generators/languages/PythonGenerator';
import { transpileR } from './transpilers';
import RStandardApiVisitor from './visitors/apis/RStandardApiVisitor';
import RStatisticsApiVisitor from './visitors/apis/RStatisticsApiVisitor';

const input = readFileSync('examples/test.R').toString() // relative to root of project
// const input = expressions.join('\n')

const apis = [ 
  new RStandardApiVisitor( new PythonStandardApiGenerator() ) ,
  new RStatisticsApiVisitor( new PythonStatisticsApiGenerator() ) ,
]

const output = await transpileR(input, new PythonGenerator(), apis)

mkdirSync('examples/out', { recursive: true })
writeFileSync('examples/out/test.py', output)

console.log("\n---------");
console.log("| INPUT |");
console.log("---------");
console.log(input);
console.log("\n----------");
console.log("| OUTPUT |");
console.log("----------");
console.log(output);