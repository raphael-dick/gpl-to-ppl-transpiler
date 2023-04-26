/**
 * Defines the functionality of the languages Standard API
 */
export default abstract class StandardApi {
  /**
   * Handles a console output
   * @param content the text content of the print statement
   */
  abstract handlePrint: (content: string) => string
}
