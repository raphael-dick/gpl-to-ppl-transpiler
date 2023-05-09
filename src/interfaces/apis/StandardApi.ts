import ApiHandler from "./Api"

/**
 * Defines the functionality of the languages Standard API
 */
export default abstract class StandardApi extends ApiHandler {
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

  /**
   * Adds a minimum length to a string and fills the remaining space with the given filler
   * @param target the target string
   * @param minLength the minimum string length
   * @param filler the item to fill the remaining spaces
   */
  abstract handleStringPadding: (target: string, minLength: string, filler: string) => string

  /**
   * Returns the length of an array
   * @param target the array
   */
  abstract handleArrayLength: (target: string) => string
}
