import CodeExecutor from './CodeExecutor'

// part that is specific to a given program
export default abstract class Test<Results> {
  abstract runAndGatherResults(executor: CodeExecutor, filename: string): Results
  abstract compare(result1: Results, result2: Results): boolean
}
