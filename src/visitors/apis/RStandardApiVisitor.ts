import StandardApi from '@interfaces/apis/StandardApi'
import ApiVisitor, { APIS } from '@interfaces/ApiVisitor'

export default class RStandardApiVisitor extends ApiVisitor {
  /** the generator used for generating the output api code */
  private target: StandardApi

  /**
   * Setup the ApiVisitor
   *
   * @param target the generator used for generating the output api code
   */
  constructor(target: StandardApi) {
    super()
    this.target = target
  }

  getName = () => APIS.STANDARD_API

  lookup = (expression: string, args: string[]) => {
    switch (expression) {
      case 'print':
        return this.target.handlePrint(args[0])
      case 'range':
        return this.target.handleRange(args[0], args[1])
      default:
        return undefined
    }
  }
}
