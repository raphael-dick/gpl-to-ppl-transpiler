import StatisticsApi from '@interfaces/apis/StatisticsApi'
import ApiVisitor, { APIS } from '@interfaces/ApiVisitor'

export default class RStatisticsApiVisitor extends ApiVisitor {
  /** the generator used for generating the output api code */
  private target: StatisticsApi

  /**
   * Setup the ApiVisitor
   *
   * @param target the generator used for generating the output api code
   */
  constructor(target: StatisticsApi) {
    super()
    this.target = target
  }

  getName = () => APIS.STATISTICS_API

  lookup = (expression: string, args: string[]) => {
    switch (expression) {
      case 'test':
        return this.target.handleTest(args[0])
      default:
        return undefined
    }
  }
}
