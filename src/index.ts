import RtoPythonPyroTranspiler from './transpilers/RtoPythonPyroTranspiler'
import RtoPythonTranspiler from './transpilers/RtoPythonTranspiler'

const TRANSPILER_CONFIGS = {
  PYTHON: {
    transpiler: RtoPythonTranspiler,
    output_path: 'examples/out/python',
  },

  PYTHON_PYRO: {
    transpiler: RtoPythonPyroTranspiler,
    output_path: 'examples/out/python_pyro',
  },
} as const

const FILES = [
  'test', 
  'isolated',
  'test2',
  'work-MBCM_simulations_MH_sampler_n100',
  'modified-MBCM_simulations_MH_sampler_n100',
  // 'original-MBCM_simulations_MH_sampler_n100',
]
const PRINT_OUTPUT = false

// FILES.forEach((filename) => run(filename, 'PYTHON'))
FILES.forEach((filename) => run(filename, 'PYTHON_PYRO'))
// run(FILES[0], 'PYTHON_PYRO')

async function run(filename: string, transpiler_config_key: keyof typeof TRANSPILER_CONFIGS) {
  const config = TRANSPILER_CONFIGS[transpiler_config_key]
  const transpiler = new config.transpiler()

  transpiler.load(`examples/in/R/${filename}.R`)
  transpiler.run()
  transpiler.save(config.output_path, filename)

  if (PRINT_OUTPUT) transpiler.print()
}
