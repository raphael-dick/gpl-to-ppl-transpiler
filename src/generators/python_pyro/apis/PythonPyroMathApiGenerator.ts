import PythonMathApiGenerator from '@src/generators/python/apis/PythonMathApiGenerator'

/**
 * The Python with Pyro API Generator for the Math API
 */
export default class PythonPyroMathApiGenerator extends PythonMathApiGenerator {
  handleLog = (content: string, base: string) => {
    this.addDependency('torch', '*')
    return `torch.log(${content})`
  }

  handleSqrt = (content: string) => {
    this.addDependency('torch', '*')
    return `torch.sqrt(${content})`
  }

  handleSum = (content: string) => {
    this.addDependency('torch', '*')
    return `torch.sum(${content})`
  }

  handleMatrix = (content: string, rows: string, columns: string) => {
    this.addDependency('torch', '*')
    return `torch.full((${columns}, ${rows}), ${content})`
  }

  handleMean = (content: string) => {
    this.addDependency('torch', '*')
    return `torch.mean(${content})`
  }
}
