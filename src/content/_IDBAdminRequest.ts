class IDBAdminRequest {
  protected name: string
  protected version: number

  constructor(name: string, version: number) {
    this.name = name
    this.version = version
  }

  protected open(): Promise<IDBAdminOpen> {
    const request = window.indexedDB.open(this.name, this.version)

    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => resolve(event)
      request.onerror = (event: any) => reject(event)
      request.onblocked = (event: any) => {
        const env = {
          ...event,
          toString: () => `Altered version from ${event.oldVersion} to ${event.newVersion}`
        }

        reject(env)
      }
    })
  }

  protected async requestObjectStore(connection: IDBAdminOpen, name: string, mode: any = 'readonly'): Promise<IDBObjectStore> {
    const conn: IDBAdminOpen = connection
    const result: IDBDatabase = conn.target.result
    const hasObjectStore: boolean = !!result.objectStoreNames.length
    const notFoundError = new Error('NotFoundError: Object Store Keys not found')
    let objectStore: any

    return new Promise((resolve, reject) => {
      if (hasObjectStore) {
        objectStore = result.transaction(name, mode).objectStore(name)

        resolve(objectStore)
      } else {
        reject(notFoundError)
      }
    })
  }

  protected async requestOpenCursor(connection: IDBAdminOpen, name: string): Promise<IDBAdminRequestEvent> {
    const conn: IDBAdminOpen = connection
    const result: IDBDatabase = conn.target.result
    const hasObjectStore: boolean = !!result.objectStoreNames.length
    const notFoundError = new Error('NotFoundError: Object Store Keys not found')
    let objectStore: IDBObjectStore
    let openCursor: IDBRequest

    return new Promise((resolve, reject) => {
      if (hasObjectStore) {
        objectStore = result.transaction(name).objectStore(name)
        openCursor = objectStore.openCursor()

        openCursor.onsuccess = (event: any) => resolve(event)
        openCursor.onerror = (event: any) => reject(event)
      } else {
        reject(notFoundError)
      }
    })
  }

  protected async requestObjectStoreKeys(connection: IDBAdminOpen, name: string): Promise<IDBAdminRequestEvent> {
    const conn: IDBAdminOpen = connection
    const result: IDBDatabase = conn.target.result
    const hasObjectStore: boolean = !!result.objectStoreNames.length
    const notFoundError = new Error('NotFoundError: Object Store Keys not found')
    let keys: any

    return new Promise((resolve, reject) => {
      if (hasObjectStore) {
        keys = result.transaction(name).objectStore(name).getAllKeys()

        keys.onsuccess = (event: any) => resolve(event)
        keys.onerror = (event: any) => reject(event)
      } else {
        reject(notFoundError)
      }
    })
  }

  protected async requestObjectStoreValues(connection: IDBAdminOpen, name: string): Promise<IDBAdminRequestEvent> {
    const conn: IDBAdminOpen = connection
    const result: IDBDatabase = conn.target.result
    const hasObjectStore: boolean = !!result.objectStoreNames.length
    const notFoundError = new Error('NotFoundError: Object Store Keys not found')
    let values: any

    return new Promise((resolve, reject) => {
      if (hasObjectStore) {
        values = result.transaction(name).objectStore(name).getAll()

        values.onsuccess = (event: any) => resolve(event)
        values.onerror = (event: any) => reject(event)
      } else {
        reject(notFoundError)
      }
    })
  }

  protected async requestIndexesFromObjectStore(connection: IDBAdminOpen, name: string): Promise<IDBAdminRequestEvent> {
    const conn: IDBAdminOpen = connection
    const result: IDBDatabase = conn.target.result
    const hasObjectStore: boolean = !!result.objectStoreNames.length
    const notFoundError = new Error('NotFoundError: Object Store Names not found')
    let names: any

    return new Promise((resolve, reject) => {
      if (hasObjectStore) {
        names = result.transaction(name).objectStore(name).indexNames

        resolve(names)
      } else {
        reject(notFoundError)
      }
    })
  }

  protected async requestObjectStoreIndex(connection: IDBAdminOpen, name: string, nameIndex: string, mode: any = 'readonly'): Promise<IDBIndex> {
    const conn: IDBAdminOpen = connection
    const result: IDBDatabase = conn.target.result
    const hasObjectStore: boolean = !!result.objectStoreNames.length
    const notFoundError = new Error('NotFoundError: Object Store Keys not found')
    let index: IDBIndex

    return new Promise((resolve, reject) => {
      if (hasObjectStore) {
        index = result.transaction(name).objectStore(name).index(nameIndex)

        resolve(index)
      } else {
        reject(notFoundError)
      }
    })
  }

  protected async requestObjectStoreIndexValues(connection: IDBAdminOpen, name: string, nameIndex: string, mode: any = 'readonly'): Promise<IDBAdminRequestEvent> {
    const conn: IDBAdminOpen = connection
    const result: IDBDatabase = conn.target.result
    const hasObjectStore: boolean = !!result.objectStoreNames.length
    const notFoundError = new Error('NotFoundError: Object Store Keys not found')
    let index: any

    return new Promise((resolve, reject) => {
      if (hasObjectStore) {
        index = result.transaction(name).objectStore(name).index(nameIndex).getAll()

        index.onsuccess = (event: any) => resolve(event)
        index.onerror = (event: any) => reject(event)
      } else {
        reject(notFoundError)
      }
    })
  }

  protected async requestObjectStoreIndexKeys(connection: IDBAdminOpen, name: string, nameIndex: string, mode: any = 'readonly'): Promise<IDBAdminRequestEvent> {
    const conn: IDBAdminOpen = connection
    const result: IDBDatabase = conn.target.result
    const hasObjectStore: boolean = !!result.objectStoreNames.length
    const notFoundError = new Error('NotFoundError: Object Store Keys not found')
    let index: any

    return new Promise((resolve, reject) => {
      if (hasObjectStore) {
        index = result.transaction(name).objectStore(name).index(nameIndex).getAllKeys()

        index.onsuccess = (event: any) => resolve(event)
        index.onerror = (event: any) => reject(event)
      } else {
        reject(notFoundError)
      }
    })
  }

  protected async requestIndexOpenCursor(connection: IDBAdminOpen, name: string, nameIndex: string): Promise<IDBAdminRequestEvent> {
    const conn: IDBAdminOpen = connection
    const result: IDBDatabase = conn.target.result
    const hasObjectStore: boolean = !!result.objectStoreNames.length
    const notFoundError = new Error('NotFoundError: Object Store Keys not found')
    let index: IDBIndex
    let openCursor: IDBRequest

    return new Promise((resolve, reject) => {
      if (hasObjectStore) {
        index = result.transaction(name).objectStore(name).index(nameIndex)
        openCursor = index.openCursor()

        openCursor.onsuccess = (event: any) => resolve(event)
        openCursor.onerror = (event: any) => reject(event)
      } else {
        reject(notFoundError)
      }
    })
  }
}

export default IDBAdminRequest
