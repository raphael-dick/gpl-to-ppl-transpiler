import IntermediateVisitor from '../../interfaces/IntermediateVisitor'

/**
 * The Python Langauge Generator
 */
export default class PythonGenerator extends IntermediateVisitor {
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
