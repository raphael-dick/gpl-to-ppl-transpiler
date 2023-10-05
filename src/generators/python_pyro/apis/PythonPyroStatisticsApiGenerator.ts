import StatisticsApi from '@src/interfaces/apis/StatisticsApi'

/**
 * The Python API with Pyro enerator for the Statistics API
 */
export default class PythonPyroStatisticsApiGenerator extends StatisticsApi {
  handleUniformLogDensity = (x: string, lower: string, upper: string) => {
    this.addDependency('torch', '*')
    this.addDependency('pyro.distributions', '*')
    return `pyro.distributions.Uniform(${lower}, ${upper}).log_prob(${x})`
  }

  handleRandomNormalDistribution = (sampleCount: string, mean: string, sd: string) => {
    this.addDependency('torch', '*')
    this.addDependency('torch.distributions', 'normal')
    return `normal.Normal(${mean}, ${sd}).sample(torch.Size([${sampleCount}]))`
  }

  handleNormalDistributionDensityInLog = (x: string, mean: string, sd: string) => {
    this.addDependency('torch.distributions', '*')
    return `torch.distributions.Normal(${mean}, ${sd}).log_prob(${x})`
  }

  handleNormalDistributionLogDensity = (x: string, mean: string, sd: string) => {
    this.addDependency('torch.distributions', '*')
    return `torch.distributions.LogNormal(${mean}, ${sd}).log_prob(${x})`
  }

  handleRandomUniformDistribution = (sampleCount: string, lower: string, upper: string) => {
    this.addDependency('torch', '*')
    this.addDependency('torch.distributions', 'uniform')
    return `uniform.Uniform(${lower}, ${upper}).sample(torch.Size([${sampleCount}]))`
  }

  handleRandomLogNormalDistribution = (sampleCount: string, mean: string, sd: string) => {
    this.addDependency('torch', '*')
    this.addDependency('pyro.distributions', '*')
    return `torch.exp(pyro.distributions.LogNormal(${mean}, ${sd}).sample(torch.Size([${sampleCount}])))`
  }
}
