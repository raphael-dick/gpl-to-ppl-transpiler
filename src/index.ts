import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import PythonGenerator from './generators/PythonGenerator';
import { transpileR } from './transpilers';

const input = readFileSync('examples/test.R').toString() // relative to root of project
// const input = expressions.join('\n')
const output = await transpileR(input, new PythonGenerator())

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