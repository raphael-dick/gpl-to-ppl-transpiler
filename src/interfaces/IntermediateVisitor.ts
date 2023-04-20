export default abstract class IntermediateVisitor {
  // Util
  abstract handleUnhandeledExpression: (expression: string) => string

  // Basic Features
  abstract handleVariableDeclaration: (name: string, value: string) => string
  abstract handleFunctionCall: (name: string, args: string[]) => string

  // Calculations
  abstract handleAddition: (summand1: string, summand2: string) => string
  abstract handleSubstraction: (minuend: string, subtrahend: string) => string
  abstract handleMultiplication: (factor1: string, factor2: string) => string
  abstract handleDivision: (dividend: string, divisior: string) => string
}