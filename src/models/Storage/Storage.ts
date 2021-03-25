import type {
  StorageStruture,
  StorageIndexStruture,
  StorageTableStruture
} from './types'



abstract class StorageBuilder {
  private query = new Map

  protected reset() {
    this.query = new Map
  }

  open(name: string, version: string, displayName?: string, estimatedSize?: number) {
    this.reset()
    this.query.set('open', Promise.resolve())

    return this
  }

  getStorageStructure() {
    if (!this.query.has('open')) {
      throw Error('getStorageStructure can only be added to open')
    }

    return this
  }
}

export default StorageBuilder
