import IntermediateVisitor from "../interfaces/IntermediateVisitor";

export default class PythonGenerator extends IntermediateVisitor {

  handleFunctionCall = (name: string, args: string[]) => {
    return `${name}(${ args.join(', ') })`
  }

  handleVariableDeclaration = (name: string, value: string) => {
    return `${name} = ${value}`
  }
}