import FileApi from '@src/interfaces/apis/FileApi'

/**
 * The Python API Generator for the File API
 */
export default class PythonFileApiGenerator extends FileApi {
  handlePathJoining = (parts: string[]) => {
    this.addDependency('os', '*')
    return `os.path.join(${parts.join(', ')})`
  }
  handleReadRDS = (path: string) => {
    this.addDependency('pyreadr', '*')
    return `pyreadr.read_r(${path})`
  }
}
