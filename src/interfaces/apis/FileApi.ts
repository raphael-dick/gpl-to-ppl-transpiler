import ApiHandler from './Api'

/**
 * Defines the functionality of the languages File API
 */
export default abstract class FileApi extends ApiHandler {
  /**
   * Handles the Read of an .RDS file
   * @param path the path to the file
   */
  abstract handleReadRDS: (path: string) => string

  /**
   * Handles the Write of an .RDS file
   * @param payload the payload that gets saved
   * @param path the path to the file
   */
  abstract handleWriteRDS: (payload: string, path: string) => string

  /**
   * Handles the creation of platform independent paths
   * @param args a list of parts to join
   */
  abstract handlePathJoining: (parts: string[]) => string

  /**
   * Handles the writing to files
   * @param payload the payload that gets saved
   * @param path the path to the file
   */
  abstract handleWriteFile: (payload: string, path: string) => string

  /**
   * Handles the conversion to json
   * @param payload the payload that gets converted
   */
  abstract handleConvertToJson: (payload: string) => string
}
