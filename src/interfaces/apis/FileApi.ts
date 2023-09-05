import ApiHandler from './Api'

/**
 * Defines the functionality of the languages File API
 */
export default abstract class FileApi extends ApiHandler {
  /**
   * Handles a console output
   * @param content the text content of the print statement
   */
  abstract handlePrint: (content: string) => string
}
