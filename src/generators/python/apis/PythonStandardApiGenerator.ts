import StandardApi from '@interfaces/apis/StandardApi'

/**
 * The Python API Generator for the Standard API
 */
export default class PythonStandardApiGenerator extends StandardApi {
  handleGetCurrentWorkingDirectoy = () => {
    this.addDependency('os', '*')
    return `os.getcwd()`
  }

  handleConcatinateStrings = (strings: string[]) => {
    return `${strings.join(' + ')}`
  }

  handleMergeDictionaries = (target: string, source: string) => {
    return `{**${target}, **${source}}`
  }

  handleConvertDictionaryToList = (dict: string) => {
    return `${dict}`
  }

  handleAdditionInDictiornary = (dict: string, key1: string, key2: string) => {
    // return `eval("${key1} + ${key2}", ${dict})` // TODO: Optionally try this for a more generic approach
    return `${dict}["${key1}"] + ${dict}["${key2}"]`
  }

  handleProcessTime = () => {
    this.addDependency('time', 'process_time')
    return `[None, None, process_time()]`
  }

  handleRepeat = (content: string, count: string) => {
    this.addDependency('numpy', '*')
    const contentModified = content.includes('.') ? content : content + '.'
    return `numpy.repeat(${contentModified}, ${count})`
  }

  handleTypeCastInt = (content: string) => {
    return `int(${content})`
  }

  handelDictionary = (items?: Record<string, string>) => {
    return `{ ${Object.keys(items)
      .map((key) => `"${key}": ${items[key]}`)
      .join(', ')} }`
  }

  handleList = (items: string[]) => {
    if (items.length == 0) return `list()`
    return `list([${items.join(',')}])`
  }

  handleArrayLength = (target: string) => {
    return `len(${target})`
  }

  handleStringPadding = (target: string, minLength: string, filler: string) => {
    return `f'{${target}:{${filler}}>{${minLength}}}'`
  }

  handlePrint = (items: string[]) => {
    return `print(${items.join(', ')})`
  }

  handleRange = (from: string, to: string) => {
    return `range(${from}, ${to} + 1)`
  }
}
