import StatisticsApi from '../../interfaces/apis/StatisticsApi';

/**
 * The Python API Generator for the Statistics API
 */
export default class PythonStatisticsApiGenerator extends StatisticsApi {
  handleTest = (content: string) => {
    return `test(${ content })`;
  };
}