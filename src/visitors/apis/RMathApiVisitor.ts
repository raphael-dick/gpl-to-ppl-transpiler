import MathApi from '@interfaces/apis/MathApi'
import ApiVisitor, { APIS } from '@interfaces/ApiVisitor'
import { extractNamedArgs } from '../util/RApiVisitorUtil'

export default class RMathApiVisitor extends ApiVisitor {
  /** the generator used for generating the output api code */
  private target: MathApi

  /**
   * Setup the ApiVisitor
   *
   * @param target the generator used for generating the output api code
   */
  constructor(target: MathApi) {
    super()
    this.target = target
  }

  getName = () => APIS.MATH_API
  getTarget = () => this.target

  lookup = (expression: string, args: string[]) => {
    const [namedArgs, unnamedArgs] = extractNamedArgs(args)

    switch (expression) {
      case 'matrix':
        return this.target.handleMatrix(args[0], args[1], args[2]) // TODO: fix for case where "matrix(0, rows, cols)"
      case 'log':
        return this.target.handleLog(args[0], args[1] ?? this.target.handleE()) // TODO: add fallback for base to "e"
      case 'sqrt':
        return this.target.handleSqrt(args[0])
      case 'min':
        return this.target.handleMin(args[0], args[1])
      case 'sum':
        return this.target.handleSum(args[0])
      case 'mean':
        return this.target.handleMean(args[0])
      case 'round':
        return this.target.handleRound(args[0], unnamedArgs[1] ?? namedArgs['digits'])
      default:
        return undefined
    }
  }
}
