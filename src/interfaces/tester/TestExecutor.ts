import Test from './Test'

export default abstract class TestExecutor {
  abstract runAndCompare<Results>(filename: string, test: Test<Results>): boolean
}
