export default abstract class CodeExecutor {
  protected basePath: string

  constructor(basePath: string) {
    this.basePath = basePath
  }

  getBasePath() {
    return this.basePath
  }

  abstract run(filename: string): void
}
