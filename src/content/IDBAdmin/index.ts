import { isType } from 'typescript-fsa';
import actions from './actions'


class IDBAdmin {
  private action?: any

  reducer(action: any) {
    this.action = action

    if (isType(action, actions.openDatabase)) {
      return this.openDatabase()
    }

    if (isType(action, actions.deleteDatabase)) {
      return this.deleteDatabase()
    }

    if (isType(action, actions.createObjectStores)) {
      return this.createObjectStores()
    }

    if (isType(action, actions.deleteObjectStores)) {
      return this.deleteObjectStores()
    }

    if (isType(action, actions.objectStore)) {
      return this.objectStore()
    }

    if (isType(action, actions.addObjects)) {
      return this.addObjects()
    }

    return this.defaultResponse()
  }

  private defaultResponse(): Promise<string> {
    return new Promise(resolve => {
      resolve('IDBAdmin: Action not found')
    })
  }

  private openDatabase(): Promise<any> {
    const {name, version} = this.action.payload
    const request = window.indexedDB.open(name, version)

    return new Promise((resolve, reject) => {
      request.onupgradeneeded = event => resolve(event)
      request.onsuccess = event => resolve(event)
      request.onblocked = event => resolve(event)
      request.onerror = event => reject(event)
    })
  }

  private deleteDatabase(): Promise<any> {
    const {name, version} = this.action.payload
    const request = window.indexedDB.deleteDatabase(name)

    return new Promise((resolve, reject) => {
      request.onsuccess = event => resolve(event)
      request.onerror = event => reject(event)
    })
  }

  private async createObjectStores(): Promise<any> {
    const {name, version, store, stores = []} = this.action.payload
    let request: any = null
    let result: any = null

    try {
      request = await this.openDatabase()
      result = request.target.result

      stores.forEach((store: createObjectStoreProperties) => {
        const { keyPath = undefined, autoIncrement = false } = store

        result.createObjectStore(store.name, {
          keyPath: store.keyPath,
          autoIncrement: store.autoIncrement
        })
      })

      return request
    } catch(error) {
      return error
    } finally {
      result.close()
    }
  }

  private async deleteObjectStores(): Promise<any> {
    const {name, version, store, stores = []} = this.action.payload
    let request: any = null
    let result: any = null

    try {
      request = await this.openDatabase()
      result = request.target.result

      stores.forEach((store: string) => {
        result.deleteObjectStore(store)
      })

      return request
    } catch(error) {
      return error
    } finally {
      result.close()
    }
  }

  private async objectStore() {
    const {name, version, store} = this.action.payload
    let request: any = null
    let result: any = null
    let objectStore: any = null

    try {
      request = await this.openDatabase()
      result = request.target.result
      objectStore = result.transaction(store).objectStore(store)

      return objectStore
    } catch(error) {
      return error
    } finally {
      result.close()
    }
  }

  private async addObjects() {
    const {name, version, store, values = []} = this.action.payload
    let request: any = null
    let result: any = null
    let objectStore: any = null
    let objectsAdded: Array<IDBRequest> = []

    try {
      request = await this.openDatabase()
      result = request.target.result
      objectStore = result.transaction(store, 'readwrite').objectStore(store)
      objectsAdded = values.map((data: any) => objectStore.add(data.value, data.key))

      return objectsAdded
    } catch(error) {
      return error
    } finally {
      result.close()
    }
  }
}


export default IDBAdmin
