import Test from '@src/interfaces/tester/Test'
import TestExecutor from '@src/interfaces/tester/TestExecutor'
import RCodeExecutor from '../code-executors/RCodeExecutor'
import PythonCodeExecutor from '../code-executors/PythonCodeExecutor'

export default class RtoPythonTestExecutor extends TestExecutor {
  runAndCompare<Results>(filename: string, test: Test<Results>): boolean {
    const inputExecutor = new RCodeExecutor('examples/in/R')
    const outputExecutor = new PythonCodeExecutor('examples/out/python_pyro')

    console.log('Running R code ...')
    const inputResults = test.runAndGatherResults(inputExecutor, filename)

    console.log('Running Python code ...')
    const outputResults = test.runAndGatherResults(outputExecutor, filename)

    return test.compare(inputResults, outputResults)
  }
}
