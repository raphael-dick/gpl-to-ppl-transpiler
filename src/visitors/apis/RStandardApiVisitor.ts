import StandardApi from '@interfaces/apis/StandardApi'
import ApiVisitor, { APIS } from '@interfaces/ApiVisitor'
import { extractNamedArgs } from '../util/RApiVisitorUtil'
import ApiHandler from '@src/interfaces/apis/Api'

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
  getTarget = () => this.target

  lookup = (expression: string, args: string[]) => {
    const [namedArgs, unnamedArgs] = extractNamedArgs(args)
    let temp

    switch (expression) {
      case 'rep':
        return this.target.handleRepeat(args[0], args[1])
      case 'list':
        if (Object.keys(namedArgs).length > 0) {
          return this.target.handelDictionary(namedArgs)
        }
        return this.target.handleList(unnamedArgs)
      case 'cat':
        return this.target.handlePrint(args)
      case 'proc.time':
        return this.target.handleProcessTime()
      case 'print':
        return this.target.handlePrint(args)
      case 'range':
        return this.target.handleRange(args[0], args[1])
      case 'length':
        return this.target.handleArrayLength(args[0])
      case 'as.integer':
        return this.target.handleTypeCastInt(args[0])
      case 'str_pad': // str_pad <- function(string, width, side = c("left", "right", "both"), pad = " ", use_width = TRUE)
        return this.target.handleStringPadding(unnamedArgs[0], unnamedArgs[1], unnamedArgs[3] ?? namedArgs['pad'])
      case 'with':
        if (!unnamedArgs[1].includes('+')) return
        temp = unnamedArgs[1].split('+').map((item) => item.trim())
        return this.target.handleAdditionInDictiornary(unnamedArgs[0], temp[0], temp[1])
      case 'as.list':
        return this.target.handleConvertDictionaryToList(args[0])
      case 'modifyList':
        return this.target.handleMergeDictionaries(args[0], args[1])
      case 'paste0':
        return this.target.handleConcatinateStrings(args)
      default:
        return undefined
    }
  }
}
