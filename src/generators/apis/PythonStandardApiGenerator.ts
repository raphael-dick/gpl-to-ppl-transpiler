import StandardApi from '@interfaces/apis/StandardApi';

/**
 * The Python API Generator for the Standard API
 */
export default class PythonStandardApiGenerator extends StandardApi {
  handlePrint = (content: string) => {
    return `print(${ content })`;
  };
}