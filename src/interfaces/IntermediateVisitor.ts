export default abstract class IntermediateVisitor {
  // ---- //
  // Util //
  // ---- //

  /**
   * Output if an expression is not currently handled by the transpiler
   * @param expression the name of the expression or error message
   */
  abstract handleUnhandeledExpression: (expression: string) => string

  // -------------- //
  // Basic Features //
  // -------------- //

  /**
   * The declaration of a variable
   * @param name the variable name
   * @param value the value that gets assigned to the variable
   */
  abstract handleVariableDeclaration: (name: string, value: string) => string

  /**
   * The call of a funtion
   * @param name the name of function
   * @param args a list of args which are supplied to the function
   */
  abstract handleFunctionCall: (name: string, args: string[]) => string

  // ------------ //
  // Calculations //
  // ------------ //

  /**
   * The addition of 2 numbers
   * @param summand1 the first summand
   * @param summand2 the second summand
   */
  abstract handleAddition: (summand1: string, summand2: string) => string

  /**
   * The subtraction of 2 numbers
   * @param minuend the minuend
   * @param subtrahend the subtrahend
   */
  abstract handleSubstraction: (minuend: string, subtrahend: string) => string

  /**
   * The multipilcation of 2 numbers
   * @param factor1 the first factor
   * @param factor2 the second factor
   */
  abstract handleMultiplication: (factor1: string, factor2: string) => string

  /**
   * The division of 2 numbers
   * @param dividend the dividend
   * @param divisior the divisor
   */
  abstract handleDivision: (dividend: string, divisior: string) => string

  /**
   * A string
   * @param input the input string
   */
  abstract handleString: (input: string) => string

  /**
   * A name of an varibale, function etc.
   * @param input the name
   */
  abstract handleId: (input: string) => string

  /**
   * A integer
   * @param input the input int value
   */
  abstract handleInt: (input: string) => string

  /**
   * A floating point number
   * @param main the part befopr the decimal place
   * @param decimal the decimal part
   */
  abstract handleFloat: (main: string, decimal: string) => string

  /**
   * A return statement
   * @param value the return value
   */
  abstract handleReturn: (value: string) => string

  /**
   * A group of expressions
   * @param value the gourps content
   */
  abstract handleGroup: (value: string) => string

  /**
   * Definition of an function
   * @param name the name of the function
   * @param args the args
   * @param body the functions body
   */
  abstract handleFunctionDefinition: (name: string, args: string, body: string) => string
}
