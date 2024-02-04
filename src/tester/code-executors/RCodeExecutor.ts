import CodeExecutor from '@src/interfaces/tester/CodeExecutor'
import { execSync } from 'child_process'

export default class RCodeExecutor extends CodeExecutor {
  run(filename: string): void {
    execSync(`cd ${this.basePath} && Rscript ${filename}.R`)
  }
}
