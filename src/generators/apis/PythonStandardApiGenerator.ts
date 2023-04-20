import StandardApi from '../../interfaces/apis/StandardApi';

export default class PythonStandardApiGenerator extends StandardApi {
  handlePrint = (content: string) => {
    return `print(${ content })`;
  };
}