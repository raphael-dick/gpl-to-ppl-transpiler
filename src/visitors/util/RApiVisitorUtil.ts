export function extractNamedArgs(args: string[]) {
  const namedArgs = Object.assign({},
    ...args.filter(item => item.includes('=')).map(item => {
      const parts = item.split(/\s*=\s*/)
      return {
        [parts[0]]: parts[1]
      }
    })
  )

  const unnamedArgs = args.filter(item => !item.includes('='))

  return [namedArgs, unnamedArgs]
}