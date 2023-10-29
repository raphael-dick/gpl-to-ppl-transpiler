import PythonFileApiGenerator from '@src/generators/python/apis/PythonFileApiGenerator'

/**
 * The Python with Pyro API Generator for the File API
 */
export default class PythonPyroFileApiGenerator extends PythonFileApiGenerator {
  handleReadRDS = (path: string) => {
    this.addDependency('torch', '*')
    this.addDependency('pyreadr', '*')
    return `torch.tensor(next(iter(pyreadr.read_r(${path}).values())).values)` // TODO: handle more generic cases
    // return `torch.tensor(pyreadr.read_r(${path}) , dtype=torch.float32)`
  }

  handleWriteRDS = (payload: string, path: string) => {
    this.addDependency('pandas', '*')
    // this.addDependency('torch', '*')
    // return `os.makedirs(${path}, exist_ok=True)\n` + 
    return `torch.save(${payload}, ${path}.replace('rds', 'pt'))`
    // return `${payload}_modified = pandas.DataFrame({k: torch.nn.functional.pad(v.flatten(), (0, max([len(val.flatten()) for val in ${payload}.values() if isinstance(val, torch.Tensor)]) - len(v.flatten())), mode='constant', value=0) if isinstance(v, torch.Tensor) else v for k, v in ${payload}.items() if isinstance(v, torch.Tensor)})\n` + 
    // `pyreadr.write_rds(${path}, ${payload}_modified)`
  }

  handleConvertToJson = (payload: string) => {
    this.addDependency('transpilerLib', '*')
    return `transpilerLib.convertPytorchToJson(${payload})`
  }
}
