import ApiHandler from "@interfaces/apis/Api";

/**
 * Defines the functionality of the languages Statistics API
 */
export default abstract class StatisticsApi extends ApiHandler {
  /**
   * Handles a test function until more functionality is implemented
   * @param content test input
   */
  abstract handleTest: (content: string) => string
}
