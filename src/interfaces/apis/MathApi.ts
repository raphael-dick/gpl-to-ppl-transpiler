import ApiHandler from './Api'

/**
 * Defines the functionality of the languages Math API
 */
export default abstract class MathApi extends ApiHandler {
  /**
   * Handles a log function
   * @param content the text content
   * @param base the text base used
   */
  abstract handleLog: (content: string, base: string) => string

  /**
   * Handles a sqrt function
   * @param content the text content
   */
  abstract handleSqrt: (content: string) => string

  /**
   * Handles a function that finds the minimum of two values
   * @param first the first number
   * @param second the second number
   */
  abstract handleMin: (first: string, second: string) => string

  /**
   * Handles a function that finds the sum
   * @param content the content
   */
  abstract handleSum: (content: string) => string

  /**
   * Handles a function that represents an exponential
   * @param base the base
   * @param exponent the exponent
   */
  abstract handlePow: (base: string, exponent: string) => string
}
