import type {
  StorageStruture,
  StorageIndexStruture,
  StorageTableStruture
} from './types'



abstract class StorageBuilder {
  protected query: Map<string, any> = new Map

  protected reset() {
    this.query = new Map
  }

  open(name: string, version: string, displayName?: string, estimatedSize?: number): StorageBuilder {
    this.reset()
    this.query.set('database', {name, version, displayName, estimatedSize})

    return this
  }

  table(name: string, mode?: any) {
    this.query.set('table', {name, mode})

    return this
  }

  getColumnNames() {
    this.query.set('get-column-names', null)

    return this
  }

  abstract execute(): Promise<any>
}

export default StorageBuilder
