/**
 * Used to define APIs on the side of the visitor, which calls the related generator of the output language
 */
export default abstract class ApiVisitor {
  /**
   * Entrypoint for every API
   * @param expression the name of the called expression / function
   * @param args list of arguments
   *
   * @returns a 'string' if the call is handled by this api or 'undefined' otherwise
   */
  abstract lookup: (expression: string, args: string[]) => string | undefined
}
