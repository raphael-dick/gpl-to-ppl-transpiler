import FileApi from '@src/interfaces/apis/FileApi'

/**
 * The Python API Generator for the File API
 */
export default class PythonFileApiGenerator extends FileApi {
  handleWriteRDS = (payload: string, path: string) => {
    this.addDependency('pyreadr', '*')
    this.addDependency('pandas', '*')
    // const convertedPaylod = `{k: pandas.DataFrame(v.numpy()) if isinstance(v, torch.Tensor) else (convert := lambda d: {k: pandas.DataFrame(v.numpy()) if isinstance(v, torch.Tensor) else (convert := lambda d: {k: convert(d) for k, v in d.items()} if isinstance(d, dict) else [convert(i) for i in d])}(v)) for k, v in ${payload}.items()}`
    // const convertedPaylod = `{k: pandas.DataFrame(v.numpy()) if isinstance(v, torch.Tensor) else v for k, v in ${payload}.items()}`
    // const convertedPaylod = payload
    // return `pyreadr.write_rds(${path}, ${convertedPaylod})`
    // return `feather.write_feather(${path}, ${payload})`
    return `pyreadr.write_rds(${path}, pandas.DataFrame(${payload}))`
  }

  handlePathJoining = (parts: string[]) => {
    this.addDependency('os', '*')
    return `os.path.join(${parts.join(', ')})`
  }

  handleReadRDS = (path: string) => {
    this.addDependency('pyreadr', '*')
    return `pyreadr.read_r(${path})`
  }

  handleWriteFile = (payload: string, path: string) => {
    return `open(${path}, "w").write(${payload})`
  }
  
  handleConvertToJson = (payload: string) => {
    return `json.dumps(${payload}, indent=2)`
  }
}
