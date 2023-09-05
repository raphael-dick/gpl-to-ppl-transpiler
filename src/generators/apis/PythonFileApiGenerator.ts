import FileApi from '@src/interfaces/apis/FileApi'

/**
 * The Python API Generator for the File API
 */
export default class PythonFileApiGenerator extends FileApi {
  handlePrint = (content: string) => {
    return content
  }
}
