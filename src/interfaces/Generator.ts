import { Dependencies } from '@interfaces/apis/Api'
export default abstract class Generator {
  // ---- //
  // Util //
  // ---- //

  /**
   * Handles the generation of symbol names
   * @param symbol
   */
  // abstract handleSymbol: (symbol: string) => string

  /**
   * Output if an expression is not currently handled by the transpiler
   * @param expression the name of the expression or error message
   */
  abstract handleUnhandeledExpression: (expression: string) => string

  /**
   * The end of the statement
   */
  abstract handleEndOfStatement: () => string

  /**
   * Load a dependency
   */
  abstract handleDependencies: (dependencies: Dependencies) => string

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
  abstract handleFunctionDefinition: (name: string, args: string[], body: string) => string

  /**
   * A Block
   * @param content the blocks content
   */
  abstract handleBlock: (content: string) => string

  /**
   * A If Statement
   * @param condition the statements condition
   * @param content the content
   */
  abstract handleIfStatement: (condition: string, content: string) => string

  /**
   * A ElseIf Statement
   * @param condition the statements condition
   * @param content the content
   */
  abstract handleElseIfStatement: (condition: string, content: string) => string

  /**
   * A Else Statement
   * @param content the content
   */
  abstract handleElseStatement: (content: string) => string

  /**
   * A larger-than comparision
   * @param first the first part
   * @param second the second part
   */
  abstract handleLargerThan: (first: string, second: string) => string

  /**
   * A larger-than-or-equal-to comparision
   * @param first the first part
   * @param second the second part
   */
  abstract handleLargerThanOrEqualTo: (first: string, second: string) => string

  /**
   * A less-than comparision
   * @param first the first part
   * @param second the second part
   */
  abstract handleLessThan: (first: string, second: string) => string

  /**
   * A less-than-or-equal-to comparision
   * @param first the first part
   * @param second the second part
   */
  abstract handleLessThanOrEqualTo: (first: string, second: string) => string

  /**
   * A equal-to comparision
   * @param first the first part
   * @param second the second part
   */
  abstract handleEqualTo: (first: string, second: string) => string

  /**
   * A not-equal-to comparision
   * @param first the first part
   * @param second the second part
   */
  abstract handleNotEqualTo: (first: string, second: string) => string

  /**
   * A for loop
   * @param iterator the iterator item
   * @param iteration the iteration
   * @param content the content
   */
  abstract handleForLoop: (iterator: string, iteration: string, content: string) => string

  /**
   * A while loop
   * @param condition the running condition
   * @param content the content
   */
  abstract handleWhileLoop: (condition: string, content: string) => string

  /**
   * A code comment
   * @param content the comment
   */
  abstract handleComment: (content: string) => string

  /**
   * A boolean
   * @param value the value
   */
  abstract handleBoolean: (value: boolean) => string

  /**
   * Accessing an index of an array
   * @param array the name of the array
   * @param index the index
   */
  abstract handleArrayItem: (array: string, index: string) => string

  /**
   * Subsetting an array
   * @param array the name of the array
   * @param from the start index
   * @param to the end index
   * @param offset how much the indexing is offset to 0
   */
  abstract handleSubsetArray: (array: string, from: string, to: string, offset: number) => string

  /**
   * Array definition
   * @param items the arrays items
   */
  abstract handleArray: (items: string[]) => string

  /**
   * Accessing Properties of dictonaries etc.
   * @param target the target variable
   * @param property the accessed property
   */
  abstract handlePropertyAccess: (target: string, property: string) => string

  /**
   * Handles a sign
   * @param sign the sign
   * @param content the content following the sign
   */
  abstract handleSign: (sign: '+' | '-', content: string) => string

  /**
   * Handles a sign
   * @param name matrix variable name
   * @param index the index of the item
   * @param value the value to assign
   */
  abstract handleMatrixItemAssignment: (name: string, index: string[], value: string) => string

  /**
   * Handles a sign
   * @param index the index
   * @param offset the offset
   */
  abstract handleIndexOffset: (index: string | number, offset: number) => string
}
