import StatisticsApi from '../../interfaces/apis/StatisticsApi';

export default class PythonStatisticsApiGenerator extends StatisticsApi {
  handleTest = (content: string) => {
    return `test(${ content })`;
  };
}