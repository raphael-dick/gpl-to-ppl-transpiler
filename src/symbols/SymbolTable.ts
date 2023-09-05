export type BaseValueType = {
  symbol: string
}

type HandleNameFunctionType = (symbol: string) => BaseValueType['symbol']

export default class SymbolTable<ValueType extends BaseValueType> {
  public symbols = new Map<string, ValueType>()
  handleName: HandleNameFunctionType

  constructor(handleName: HandleNameFunctionType) {
    this.handleName = handleName
  }

  get(symbol: string): ValueType {
    return this.symbols.get(symbol)
  }

  getSymbol(symbol: string): string {
    return this.get(symbol)?.symbol
  }

  add(symbol: string, data: Omit<ValueType, 'symbol'>): void {
    this.symbols.set(symbol, {
      symbol: this.handleName(symbol),
      ...data,
    } as ValueType)
  }
}

/*

types: 
- Variables: uniforming names (e.g. R supports dots in the variable name but python not)
- Functions: uniforming names, language specific task (e.g. mapping named args in R)

Stored data depends on input language -> extend this base class





*/
