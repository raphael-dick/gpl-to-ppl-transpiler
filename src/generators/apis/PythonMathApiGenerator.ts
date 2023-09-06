import MathApi from '@src/interfaces/apis/MathApi'

/**
 * The Python API Generator for the Math API
 */
export default class PythonMathApiGenerator extends MathApi {
  handleMatrix = (content: string, rows: string, columns: string) => {
    this.addDependency('numpy', '*')
    return `numpy.full((${rows}, ${columns}), ${content})`
  }

  handleE = () => {
    this.addDependency('math', '*')
    return `math.e`
  }

  handleRound = (number: string, digits: string) => {
    return `round(${number}, ${digits})`
  }

  handleMean = (content: string) => {
    this.addDependency('statistics', 'mean')
    return `mean(${content})`
  }

  handlePow = (base: string, exponent: string) => {
    return `pow(${base}, ${exponent})`
  }

  handleSum = (content: string) => {
    return `sum(${content})`
  }

  handleMin = (first: string, second: string) => {
    return `min(${first}, ${second})`
  }

  handleSqrt = (content: string) => {
    this.addDependency('math', 'sqrt')
    return `sqrt(${content})`
  }

  handleLog = (content: string, base: string) => {
    this.addDependency('math', 'log')
    return `log(${content}, ${base})`
  }
}
