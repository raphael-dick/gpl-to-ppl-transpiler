import IntermediateVisitor from '../../interfaces/IntermediateVisitor'

const INDENTATION = '  '

/**
 * The Python Langauge Generator
 */
export default class PythonGenerator extends IntermediateVisitor {
  
  handleEndOfStatement = () => {
    return `\n`  
  }
  
  handleForLoop = (iterator: string, iteration: string, content: string) => {
    return `for ${iterator} in ${iteration}:\n${content}`
  }

  handleWhileLoop = (condition: string, content: string) => {
    return `while ${condition}:\n${content}`
  }

  handleLargerThan = (first: string, second: string) => {
    return `${first} > ${second}`
  }

  handleLargerThanOrEqualTo = (first: string, second: string) => {
    return `${first} >= ${second}`
  }

  handleLessThan = (first: string, second: string) => {
    return `${first} < ${second}`
  }

  handleLessThanOrEqualTo = (first: string, second: string) => {
    return `${first} <= ${second}`
  }

  handleEqualTo = (first: string, second: string) => {
    return `${first} == ${second}`
  }

  handleNotEqualTo = (first: string, second: string) => {
    return `${first} != ${second}`
  }

  handleBlock = (content: string) => {
    return INDENTATION + content.split('\n').join(`\n${INDENTATION}`)
  }

  handleIfStatement = (condition: string, content: string) => {
    return `if ${condition}:\n${content}`
  }

  handleElseIfStatement = (condition: string, content: string) => {
    return `elif ${condition}:\n${content}`
  }
  
  handleElseStatement = (content: string) => {
    return `else:\n${content}`
  }

  handleFunctionDefinition = (name: string, value: string, body: string) => {
    return `def ${name}(${value}):\n${body}`
  }

  handleGroup = (value: string) => {
    return `(${value})`
  }

  handleReturn = (value: string) => {
    return `return ${value}`
  }

  handleString = (input: string) => {
    return `${input}`
  }

  handleId = (input: string) => {
    return `${input}`
  }

  handleInt = (input: string) => {
    return `${input}`
  }

  handleFloat = (main: string, decimal: string) => {
    return `${main}.${decimal}`
  }

  handleAddition = (summand1: string, summand2: string) => {
    return `${summand1} + ${summand2}`
  }

  handleSubstraction = (minuend: string, subtrahend: string) => {
    return `${minuend} - ${subtrahend}`
  }

  handleMultiplication = (factor1: string, factor2: string) => {
    return `${factor1} * ${factor2}`
  }

  handleDivision = (dividend: string, divisior: string) => {
    return `${dividend} / ${divisior}`
  }

  handleFunctionCall = (name: string, args: string[]) => {
    return `${name}(${args.join(', ')})`
  }

  handleVariableDeclaration = (name: string, value: string) => {
    return `${name} = ${value}`
  }

  handleUnhandeledExpression = (expression: string) => {
    return `<<<<Unhandled Expression: '${expression}'>>>>`
  }
}
