import RtoPythonTestExecutor from './tester/test-executors/RtoPythonTestExecutor'
import MBCM_simulations_MH_sampler_n100_Test from './tester/tests/MBCM_simulations_MH_sampler_n100_Test'

const test = new MBCM_simulations_MH_sampler_n100_Test()
const filename = 'modified-MBCM_simulations_MH_sampler_n100'

const result = new RtoPythonTestExecutor().runAndCompare(filename, test)

if (result) console.log('\x1b[32mTest ran successfully. Programs can be assumed as (approximately) equal based on the underlying test!\x1b[0m')
else console.error('\x1b[31mTest did NOT run successfully. Programs can NOT be assumed as (approximately) equal based on the underlying test!\x1b[0m')
