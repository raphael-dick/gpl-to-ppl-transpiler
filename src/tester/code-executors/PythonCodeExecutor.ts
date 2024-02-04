import CodeExecutor from '@src/interfaces/tester/CodeExecutor'
import { execSync } from 'child_process'

export default class PythonCodeExecutor extends CodeExecutor {
  run(filename: string): void {
    execSync(`cd ${this.basePath} && python3 ${filename}.py`)
  }
}
