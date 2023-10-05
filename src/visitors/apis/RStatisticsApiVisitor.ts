import StatisticsApi from '@interfaces/apis/StatisticsApi'
import ApiVisitor, { APIS } from '@interfaces/ApiVisitor'
import { extractNamedArgs } from '../util/RApiVisitorUtil'

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
  getTarget = () => this.target

  lookup = (expression: string, args: string[]) => {
    const [namedArgs, unnamedArgs] = extractNamedArgs(args)

    switch (expression) {
      case 'rlnorm':
        return this.target.handleRandomLogNormalDistribution(
          unnamedArgs[0] ?? namedArgs['n'],
          unnamedArgs[1] ?? namedArgs['meanlog'],
          unnamedArgs[2] ?? namedArgs['sdlog'],
        )
      case 'rnorm':
        return this.target.handleRandomNormalDistribution(
          unnamedArgs[0] ?? namedArgs['n'],
          unnamedArgs[1] ?? namedArgs['mean'],
          unnamedArgs[2] ?? namedArgs['sd'],
        )
      case 'runif':
        return this.target.handleRandomUniformDistribution(
          unnamedArgs[0] ?? namedArgs['n'],
          unnamedArgs[1] ?? namedArgs['min'],
          unnamedArgs[2] ?? namedArgs['max'],
        )
      case 'dnorm':
        if (!namedArgs['log']) return undefined

        return this.target.handleNormalDistributionDensityInLog(
          unnamedArgs[0] ?? namedArgs['x'],
          unnamedArgs[1] ?? namedArgs['mean'],
          unnamedArgs[2] ?? namedArgs['sd'],
        )
      case 'dlnorm':
        if (!namedArgs['log']) return undefined

        return this.target.handleNormalDistributionLogDensity(
          unnamedArgs[0] ?? namedArgs['x'],
          unnamedArgs[1] ?? namedArgs['meanlog'],
          unnamedArgs[2] ?? namedArgs['sdlog'],
        )
      case 'dunif':
        if (!namedArgs['log']) return undefined

        return this.target.handleUniformLogDensity(
          // TODO: fix because in the source file we have a named arg and then unnamedargs (which is for now not supprted)
          namedArgs['x'],
          unnamedArgs[0] ?? namedArgs['min'],
          unnamedArgs[1] ?? namedArgs['max'],
        )
      default:
        return undefined
    }
  }
}
