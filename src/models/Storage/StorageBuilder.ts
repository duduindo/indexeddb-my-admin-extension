import waterfall from 'async/waterfall'
import type {
  StorageStruture,
  StorageIndexStruture,
  StorageTableStruture
} from './types'


abstract class StorageBuilder {
  protected queue: Set<any> = new Set

  protected reset() {
    this.queue.clear()
  }

  abstract addContent(value: any): StorageBuilder

  abstract clear(): StorageBuilder

  abstract deleteRow(key: any): StorageBuilder

  abstract getColumnNames(): StorageBuilder

  abstract getContent(): StorageBuilder

  abstract getKeyPath(): StorageBuilder

  abstract getRows(): StorageBuilder

  abstract index(name: string): StorageBuilder

  abstract isAutoIncrement(): StorageBuilder

  abstract open(name: string, version: string, displayName?: string, estimatedSize?: number): StorageBuilder

  abstract putContent(value: any, key?: any): StorageBuilder

  abstract table(name: string, mode?: any): StorageBuilder

  execute(): Promise<any> {
    const queue = Array.from(this.queue)

    return new Promise((resolve, reject) => {
      waterfall(queue, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}

export default StorageBuilder
