import { isType } from 'typescript-fsa';
import actions from './actions'
import IDBADatabase from './database'
import IDBAObjectStore from './objectStore'


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

    if (isType(action, actions.addObjects)) {
      return this.addObjects()
    }

    if (isType(action, actions.putObjects)) {
      return this.putObjects()
    }

    if (isType(action, actions.getObjects)) {
      return this.getObjects()
    }

    if (isType(action, actions.deleteObjects)) {
      return this.deleteObjects()
    }

    if (isType(action, actions.countObjects)) {
      return this.countObjects()
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
    const {name, version, stores = []} = this.action.payload
    const request = new IDBADatabase(name, version)

    return request.createObjectStores(stores)
  }

  private async deleteObjectStores(): Promise<any> {
    const {name, version, stores = []} = this.action.payload
    const request = new IDBADatabase(name, version)

    return request.deleteObjectStores(stores)
  }

  private addObjects() {
    const {name, version, store, values = []} = this.action.payload
    const request = new IDBAObjectStore(name, version, store)

    return request.put(values)
  }

  private putObjects() {
    const {name, version, store, values = []} = this.action.payload
    const request = new IDBAObjectStore(name, version, store)

    return request.put(values)
  }

  private getObjects() {
    const {name, version, store, keys = []} = this.action.payload
    const request = new IDBAObjectStore(name, version, store)

    return request.get(keys)
  }

  private deleteObjects() {
    const {name, version, store, keys = []} = this.action.payload
    const request = new IDBAObjectStore(name, version, store)

    return request.delete(keys)
  }

  private countObjects() {
    const {name, version, store, keys = []} = this.action.payload
    const request = new IDBAObjectStore(name, version, store)

    return request.count(keys)
  }
}


export default IDBAdmin
