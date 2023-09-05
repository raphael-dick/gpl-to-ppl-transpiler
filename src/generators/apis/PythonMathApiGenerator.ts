import MathApi from '@src/interfaces/apis/MathApi'

/**
 * The Python API Generator for the Math API
 */
export default class PythonMathApiGenerator extends MathApi {
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
    this.addDependency('math', '*')
    return `math.sqrt(${content})`
  }

  handleLog = (content: string, base: string) => {
    this.addDependency('math', '*')
    return `math.log(${content}, ${base})`
  }
}
