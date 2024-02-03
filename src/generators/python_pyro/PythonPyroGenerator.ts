import PythonGenerator from '../python/PythonGenerator'

/**
 * The Python with Pyro Language Generator
 */
export default class PythonPyroGenerator extends PythonGenerator {

  handleMatrixItemAssignment = (name: string, index: string[], value: string) => {
    // TODO: add dependency for 'torch'

    return this.handleVariableDeclaration(`${name}[${index.join(',')}]`, `torch.flatten(${value})`)
      // return super.handleMatrixItemAssignment?.(name, index, ) // TODO: use super call but for some reason it did not work
  }

}
