import ApiHandler from '@interfaces/apis/Api'

/**
 * Defines the functionality of the languages Statistics API
 */
export default abstract class StatisticsApi extends ApiHandler {
  /**
   * Handles a randomized log normal distribution
   * @param sampleCount number of samples
   * @param mean the mean of the distribution
   * @param sd the standard deviation of the distribution
   */
  abstract handleRandomLogNormalDistribution: (sampleCount: string, mean: string, sd: string) => string

  /**
   * Handles a single random number from a uniform diystribution
   * @param sampleCount number of samples
   * @param lower the lower bound (included)
   * @param upper the upper bound (included)
   */
  abstract handleRandomUniformDistribution: (sampleCount: string, lower: string, upper: string) => string

  /**
   * Handles densitry of normal distributions in log scale
   * @param x position to calculate the density from
   * @param mean the mean of the distribution
   * @param sd the standard deviation of the distribution
   */
  abstract handleNormalDistributionDensityInLog: (x: string, mean: string, sd: string) => string

  /**
   * Handles densitry of logaritmic normal distribution
   * @param x position to calculate the density from
   * @param mean the mean of the distribution
   * @param sd the standard deviation of the distribution
   */
  abstract handleNormalDistributionLogDensity: (x: string, mean: string, sd: string) => string

  /**
   * Handles a randomized normal distribution
   * @param sampleCount number of samples
   * @param mean the mean of the distribution
   * @param sd the standard deviation of the distribution
   */
  abstract handleRandomNormalDistribution: (sampleCount: string, mean: string, sd: string) => string

  /**
   * Handles log-density of the uniform distribution
   * @param x position to calculate the density from
   * @param lower the lower bound (included)
   * @param upper the upper bound (included)
   */
  abstract handleUniformLogDensity: (x: string, lower: string, upper: string) => string
}
