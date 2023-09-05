import StandardApi from '@interfaces/apis/StandardApi'
import MathApi from '@interfaces/apis/MathApi'
import ApiVisitor, { APIS } from '@interfaces/ApiVisitor'
import { extractNamedArgs } from '../util/RApiVisitorUtil'
import ApiHandler from '@src/interfaces/apis/Api'

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
      case 'log':
        return this.target.handleLog(args[0], args[1]) // TODO: add fallback for base to "e"
      case 'sqrt':
        return this.target.handleSqrt(args[0])
      case 'min':
        return this.target.handleMin(args[0], args[1])
      case 'sum':
        return this.target.handleSum(args[0])
      default:
        return undefined
    }
  }
}
