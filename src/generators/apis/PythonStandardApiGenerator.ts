import StandardApi from '@interfaces/apis/StandardApi'

/**
 * The Python API Generator for the Standard API
 */
export default class PythonStandardApiGenerator extends StandardApi {
  
  handleStringPadding = (target: string, minLength: string, filler: string) => {
    return `f'{${target}:{${filler}}>{${minLength}}}'`
  }

  handlePrint = (content: string) => {
    return `print(${content})`
  }
  
  handleRange = (from: string, to: string) => {
    return `range(${from}, ${to} + 1)`
  }
}
