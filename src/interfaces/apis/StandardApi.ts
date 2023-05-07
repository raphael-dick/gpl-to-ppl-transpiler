/**
 * Defines the functionality of the languages Standard API
 */
export default abstract class StandardApi {
  /**
   * Handles a console output
   * @param content the text content of the print statement
   */
  abstract handlePrint: (content: string) => string

  /**
   * Handles a range definition
   * @param from the start of the range
   * @param to the end of the range
   */
  abstract handleRange: (from: string, to: string) => string
}
