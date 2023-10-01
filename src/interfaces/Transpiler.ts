import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import ApiVisitor from './ApiVisitor'
import Generator from './Generator'

export default abstract class Transpiler {
  protected input: string
  protected output: string

  protected extension: string
  protected generator: Generator
  protected apis: ApiVisitor[]

  // protected abstract setup(): void
  protected abstract transpile(): string

  run() {
    this.output = this.transpile()
  }

  load(path: string) {
    this.input = readFileSync(path).toString()
  }

  print() {
    console.log(
      `
  ---------
  | INPUT |
  ---------
  ${this.input}

  ----------
  | OUTPUT |
  ----------
  ${this.output}
  `,
    )
  }

  save(dir: string, filename: string) {
    mkdirSync(dir, { recursive: true }) // ensure the output dir exists
    writeFileSync(`${dir}/${filename}.${this.extension}`, this.output) // save the output as a file
  }
}
