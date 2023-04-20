export default abstract class ApiVisitor {
  abstract lookup: (expression: string, args: string[]) => (string | undefined)
}