import IntermediateVisitor from "../../interfaces/IntermediateVisitor";

/**
 * The Python Langauge Generator
 */
export default class PythonGenerator extends IntermediateVisitor {

  handleAddition = (summand1: string, summand2: string) => {
    return `${summand1} + ${summand2}`
  };

  handleSubstraction= (minuend: string, subtrahend: string) => {
    return `${minuend} - ${subtrahend}`
  };

  handleMultiplication = (factor1: string, factor2: string) => {
    return `${factor1} * ${factor2}`
  };

  handleDivision = (dividend: string, divisior: string) => {
    return `${dividend} / ${divisior}`
  };

  handleFunctionCall = (name: string, args: string[]) => {
    return `${name}(${ args.join(', ') })`
  }

  handleVariableDeclaration = (name: string, value: string) => {
    return `${name} = ${value}`
  }

  handleUnhandeledExpression = (expression: string) => {
    return `<<<<Unhandled Expression: '${expression}'>>>>`
  };
}