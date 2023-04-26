import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import PythonStandardApiGenerator from '@generators/apis/PythonStandardApiGenerator'
// import PythonStandardApiGenerator from './generators/apis/PythonStandardApiGenerator';
import PythonStatisticsApiGenerator from '@generators/apis/PythonStatisticsApiGenerator'
import PythonGenerator from '@generators/languages/PythonGenerator'
import { transpileR } from '@transpilers/index'
import RStandardApiVisitor from '@visitors/apis/RStandardApiVisitor'
import RStatisticsApiVisitor from '@visitors/apis/RStatisticsApiVisitor'

const input = readFileSync('examples/test.R').toString() // read input code from file (path is relative to root of project)

// list of apis that should be transpiled
const apis = [new RStandardApiVisitor(new PythonStandardApiGenerator()), new RStatisticsApiVisitor(new PythonStatisticsApiGenerator())]

const output = await transpileR(input, new PythonGenerator(), apis)

mkdirSync('examples/out', { recursive: true }) // ensure the output dir exists
writeFileSync('examples/out/test.py', output) // save the output as a file

console.log(
  `
---------
| INPUT |
---------
${input}

----------
| OUTPUT |
----------
${output}
`,
)
