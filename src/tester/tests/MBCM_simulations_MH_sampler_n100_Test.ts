import CodeExecutor from '@src/interfaces/tester/CodeExecutor'
import Test from '@src/interfaces/tester/Test'
import fs from 'fs'
import ttest from '@stdlib/stats-ttest2'

type Results = {
  acc_rate_Rth: number[]
  acc_rate_theta: number[]
}

export default class MBCM_simulations_MH_sampler_n100_Test extends Test<Results> {
  runAndGatherResults(executor: CodeExecutor, filename: string): Results {
    // executor.run(filename)

    const acc_rate_Rth = []
    const acc_rate_theta = []

    for (let index = 1; index <= 100; index++) {
      const result = JSON.parse(
        fs.readFileSync(`${executor.getBasePath()}/_MCMC_output/_simstudy_results/MH_n100_s${String(index).padStart(3, '0')}.json`, 'utf8'),
      )

      acc_rate_Rth.push(result['acc_rate_Rth'] || result['acc.rate_Rth'])
      acc_rate_theta.push(result['acc_rate_theta'] || result['acc.rate_theta'])
    }

    return {
      acc_rate_Rth,
      acc_rate_theta,
    }
  }

  compare(result1: Results, result2: Results): boolean {
    const options = {
      alpha: 0.05,
    }

    const resultRth = ttest(result1.acc_rate_Rth, result2.acc_rate_Rth, options)
    const resultTheta = ttest(result1.acc_rate_theta, result2.acc_rate_theta, options)

    const approximatelyEqual = !resultRth.rejected && !resultTheta.rejected

    console.log(
      `Based on the Welch two sample t-test with a significance level of ${options.alpha * 100}% one ${
        approximatelyEqual ? 'cannot' : 'can'
      } reject the null hypothesis (no difference in means)`,
    )

    return approximatelyEqual
  }
}
