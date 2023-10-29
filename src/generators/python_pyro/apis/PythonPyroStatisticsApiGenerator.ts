import StatisticsApi from '@src/interfaces/apis/StatisticsApi'

/**
 * The Python API with Pyro enerator for the Statistics API
 */
export default class PythonPyroStatisticsApiGenerator extends StatisticsApi {
  handleUniformLogDensity = (x: string, lower: string, upper: string) => {
    this.addDependency('torch', '*')
    this.addDependency('pyro.distributions', '*')
    return `pyro.distributions.Uniform(${lower}, ${upper}).log_prob(torch.clamp(${x}, ${lower}, ${upper}))`
    // return `pyro.distributions.Uniform(${lower}, ${upper}).log_prob(${x})`
    // return `pyro.distributions.Uniform(${lower}, ${upper}).log_prob(min(max(${x}, ${lower}), ${upper}))`
  }

  handleRandomNormalDistribution = (sampleCount: string, mean: string, sd: string) => {
    this.addDependency('torch', '*')
    this.addDependency('torch.distributions', 'normal')
    // return `normal.Normal(torch.tensor(${mean}), ${sd}).sample(torch.Size([${sampleCount}]))`
    return `normal.Normal(torch.tensor(${mean}), ${sd}).sample()`
    // return `normal.Normal(torch.tensor(${mean}), ${sd}).sample(torch.Size([${sampleCount}]))`
  }

  handleNormalDistributionDensityInLog = (x: string, mean: string, sd: string) => {
    this.addDependency('torch.distributions', '*')
    return `torch.distributions.Normal(torch.tensor(${mean}), torch.max(torch.tensor(${sd}), torch.tensor(1e-6))).log_prob(torch.tensor(${x}))`
  }

  handleNormalDistributionLogDensity = (x: string, mean: string, sd: string) => {
    this.addDependency('torch.distributions', '*')
    return `torch.distributions.LogNormal(${mean}, torch.max(torch.tensor(${sd}), torch.tensor(1e-6))).log_prob(${x})`
  }

  handleRandomUniformDistribution = (sampleCount: string, lower: string, upper: string) => {
    this.addDependency('torch', '*')
    this.addDependency('torch.distributions', 'uniform')
    return `uniform.Uniform(${lower}, ${upper}).sample(torch.Size([${sampleCount}]))`
  }

  handleRandomLogNormalDistribution = (sampleCount: string, mean: string, sd: string) => {
    this.addDependency('torch', '*')
    this.addDependency('pyro.distributions', '*')
    return `pyro.distributions.LogNormal(${mean}, ${sd}).sample(torch.Size([${sampleCount}]))`
  }
}
