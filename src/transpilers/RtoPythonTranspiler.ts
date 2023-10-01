import PythonFileApiGenerator from '@src/generators/python/apis/PythonFileApiGenerator'
import PythonMathApiGenerator from '@src/generators/python/apis/PythonMathApiGenerator'
import PythonStandardApiGenerator from '@src/generators/python/apis/PythonStandardApiGenerator'
import PythonStatisticsApiGenerator from '@src/generators/python/apis/PythonStatisticsApiGenerator'
import RFileApiVisitor from '@src/visitors/apis/RFileApiVisitor'
import RMathApiVisitor from '@src/visitors/apis/RMathApiVisitor'
import RStandardApiVisitor from '@src/visitors/apis/RStandardApiVisitor'
import RStatisticsApiVisitor from '@src/visitors/apis/RStatisticsApiVisitor'
import PythonGenerator from '@src/generators/python/PythonGenerator'
import RInputTranspiler from './input/RInputTranspiler'

export default class RtoPythonTranspiler extends RInputTranspiler {
  extension = 'py'

  apis = [
    new RStandardApiVisitor(new PythonStandardApiGenerator()),
    new RStatisticsApiVisitor(new PythonStatisticsApiGenerator()),
    new RMathApiVisitor(new PythonMathApiGenerator()),
    new RFileApiVisitor(new PythonFileApiGenerator()),
  ]

  generator = new PythonGenerator()
}
