import RFileApiVisitor from '@src/visitors/apis/RFileApiVisitor'
import RMathApiVisitor from '@src/visitors/apis/RMathApiVisitor'
import RStandardApiVisitor from '@src/visitors/apis/RStandardApiVisitor'
import RStatisticsApiVisitor from '@src/visitors/apis/RStatisticsApiVisitor'
import RInputTranspiler from './input/RInputTranspiler'
import PythonPyroFileApiGenerator from '@src/generators/python_pyro/apis/PythonPyroFileApiGenerator'
import PythonPyroMathApiGenerator from '@src/generators/python_pyro/apis/PythonPyroMathApiGenerator'
import PythonPyroStatisticsApiGenerator from '@src/generators/python_pyro/apis/PythonPyroStatisticsApiGenerator'
import PythonPyroStandardApiGenerator from '@src/generators/python_pyro/apis/PythonPyroStandardApiGenerator'
import PythonPyroGenerator from '@src/generators/python_pyro/PythonPyroGenerator'

const SUPPRESS_ALL_WARNINGS = true // TODO: disable, use only for testing

export default class RtoPythonPyroTranspiler extends RInputTranspiler {
  extension = 'py'

  apis = [
    new RStandardApiVisitor(new PythonPyroStandardApiGenerator()),
    new RStatisticsApiVisitor(new PythonPyroStatisticsApiGenerator()),
    new RMathApiVisitor(new PythonPyroMathApiGenerator()),
    new RFileApiVisitor(new PythonPyroFileApiGenerator()),
  ]

  generator = new PythonPyroGenerator()

  protected transpile(): string {
    if(!SUPPRESS_ALL_WARNINGS) return super.transpile()
    return `import warnings
warnings.filterwarnings("ignore")
` + super.transpile()
  }
}
