/**
 * Define the base features of an Api
 */
export default class ApiHandler {

  dependencies: Dependencies = {} 

  addDependency(name: Dependency['name'], property: Dependency['property']) {
    const entry = this.dependencies[ name ]
    if(entry) {
      if( entry.includes(property) ) return
      entry.push(property)
    } else {
      this.dependencies[ name ] = [ property ]
    }
  }

  getDependencies() {
    return this.dependencies
  }

}

export type Dependencies = Record<Dependency['name'], Dependency['property'][]>

export type Dependency = {
  name: string,
  property: string
}

export function mergeDependencies(list: Dependencies[]): Dependencies {
  return list.reduce((prev, current) => {
    Object.keys( current ).forEach( key => {
      const item = prev[ key ]
      const value = current[ key ]
      if( item ) {
        value.forEach(property => {
          if(item.includes(property)) return
          item.push( property )
        });
      } else prev[ key ] = value
    })
    return prev
  }, {})
}