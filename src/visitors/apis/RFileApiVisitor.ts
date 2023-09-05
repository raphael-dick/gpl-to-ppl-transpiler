import FileApi from '@interfaces/apis/FileApi'
import ApiVisitor, { APIS } from '@interfaces/ApiVisitor'
import { extractNamedArgs } from '../util/RApiVisitorUtil'

export default class RFileApiVisitor extends ApiVisitor {
  /** the generator used for generating the output api code */
  private target: FileApi

  /**
   * Setup the ApiVisitor
   *
   * @param target the generator used for generating the output api code
   */
  constructor(target: FileApi) {
    super()
    this.target = target
  }

  getName = () => APIS.FILE_API
  getTarget = () => this.target

  lookup = (expression: string, args: string[]) => {
    const [namedArgs, unnamedArgs] = extractNamedArgs(args)

    switch (expression) {
      case 'print':
        return this.target.handlePrint(args[0])

      default:
        return undefined
    }
  }
}
