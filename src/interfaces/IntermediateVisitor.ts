export default abstract class IntermediateVisitor {
  abstract handleVariableDeclaration: (name: string, value: string) => string
  abstract handleFunctionCall: (name: string, args: string[]) => string
}