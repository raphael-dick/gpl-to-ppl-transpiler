import { Dependencies } from '@src/interfaces/apis/Api'
import Generator from '@src/interfaces/Generator'

const INDENTATION = '  '

/**
 * The Python Language Generator
 */
export default class PythonGenerator extends Generator {
  handleIndexOffset = (index: string | number, offset: number) => {
    return isNaN(index as number) ? `${index}-${offset}` : `${Number(index) - 1}`
  }

  handleMatrixItemAssignment = (name: string, index: string[], value: string) => {
    return this.handleVariableDeclaration(`${name}[${index.join(',')}]`, value)
  }

  handleSign = (sign: '+' | '-', content: string) => {
    return `${sign}${content}`
  }

  handlePropertyAccess = (target: string, property: string) => {
    return `${target}["${property}"]`
  }

  handleArray = (items: string[]) => {
    const modified = items.map((item) => (item.startsWith('range') ? `*list(${item})` : item))
    return `[${modified.join(', ')}]`
  }

  handleSubsetArray = (array: string, from: string, to: string, offset?: number) => {
    const fromNew = offset ? (isNaN(from as never) ? `${from} - ${offset}` : `${Number(from) - offset}`) : from
    const toNew = offset ? (isNaN(to as never) ? `${to}${offset === 1 ? '' : `- ${offset - 1}`}` : `${Number(to) - offset + 1}`) : to

    let value = ''

    if (fromNew !== '0') value += `${array}[:${fromNew}] + `
    value += `${array}[${toNew}:]`

    return value
  }

  handleArrayItem = (array: string, index: string) => {
    return `${array}[${index}]`
  }

  handleBoolean = (value: boolean) => {
    return value ? 'True' : 'False'
  }

  handleDependencies = (dependencies: Dependencies) => {
    const value = Object.keys(dependencies)
      .map((key) => {
        const allValues = dependencies[key]
        const values = allValues.filter((item) => item !== '*')

        const lines = []

        if (values.length != allValues.length) {
          lines.push(`import ${key}`)
        }
        if (values.length > 0) {
          lines.push(`from ${key} import ${values.join(', ')}`)
        }
        return lines.join('\n')
      })
      .join('\n')
    return value ? value + '\n\n' : ''
  }

  handleComment = (content: string) => {
    return `#${content}`
  }

  handleEndOfStatement = () => {
    return `\n`
  }

  handleForLoop = (iterator: string, iteration: string, content: string) => {
    return `for ${iterator} in ${iteration}:\n${content}`
  }

  handleWhileLoop = (condition: string, content: string) => {
    return `while ${condition}:\n${content}`
  }

  handleLargerThan = (first: string, second: string) => {
    return `${first} > ${second}`
  }

  handleLargerThanOrEqualTo = (first: string, second: string) => {
    return `${first} >= ${second}`
  }

  handleLessThan = (first: string, second: string) => {
    return `${first} < ${second}`
  }

  handleLessThanOrEqualTo = (first: string, second: string) => {
    return `${first} <= ${second}`
  }

  handleEqualTo = (first: string, second: string) => {
    return `${first} == ${second}`
  }

  handleNotEqualTo = (first: string, second: string) => {
    return `${first} != ${second}`
  }

  /** number of layers of indentations */
  indentations = 0

  handleBlock = (content: string) => {
    this.indentations++
    const indentation = new Array(this.indentations).fill(INDENTATION).join('')
    const result = indentation + content.split('\n').join(`\n${indentation}`)
    this.indentations--
    return result
  }

  handleIfStatement = (condition: string, content: string) => {
    return `if ${condition}:\n${content}\n`
  }

  handleElseIfStatement = (condition: string, content: string) => {
    return `elif ${condition}:\n${content}\n`
  }

  handleElseStatement = (content: string) => {
    return `else:\n${content}\n`
  }

  handleFunctionDefinition = (name: string, value: string[], body: string) => {
    return `def ${name}(${value.join(',')}):\n${body}`
  }

  handleGroup = (value: string) => {
    return `(${value})`
  }

  handleReturn = (value: string) => {
    return `return ${value}`
  }

  handleString = (input: string) => {
    return `${input}`
  }

  handleId = (input: string) => {
    return `${input}`
  }

  handleInt = (input: string) => {
    return `${input}`
  }

  handleFloat = (main: string, decimal: string) => {
    return `${main}.${decimal}`
  }

  handleAddition = (summand1: string, summand2: string) => {
    return `${summand1} + ${summand2}`
  }

  handleSubstraction = (minuend: string, subtrahend: string) => {
    return `${minuend} - ${subtrahend}`
  }

  handleMultiplication = (factor1: string, factor2: string) => {
    return `${factor1} * ${factor2}`
  }

  handleDivision = (dividend: string, divisior: string) => {
    return `${dividend} / ${divisior}`
  }

  handleFunctionCall = (name: string, args: string[]) => {
    return `${name}(${args.join(', ')})`
  }

  handleVariableDeclaration = (name: string, value: string) => {
    return `${name} = ${value}`
  }

  handleUnhandeledExpression = (expression: string) => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (process.env.REPORT_MISSING_FEATURES.toLocaleLowerCase() === 'true') console.error(`Unhandled Expression: ${expression}`)
    return `<<<<Unhandled Expression: '${expression}'>>>>`
  }
}
