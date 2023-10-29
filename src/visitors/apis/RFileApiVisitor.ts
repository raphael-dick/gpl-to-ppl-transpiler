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
      case 'readRDS':
        return this.target.handleReadRDS(args[0])

      case 'saveRDS':
        return this.target.handleWriteRDS(namedArgs['object'], namedArgs['file'])

      case 'file.path':
        return this.target.handlePathJoining(args)
      case 'write':
        return this.target.handleWriteFile(args[0], args[1])
      case 'toJSON':
        return this.target.handleConvertToJson(args[0])

      default:
        return undefined
    }
  }
}
