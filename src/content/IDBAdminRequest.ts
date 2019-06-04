class IDBAdminRequest {
  constructor(private name: string, private version: number) {}

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

  protected async requestObjectStoreKeys(connection: IDBAdminOpen, name: string): Promise<IDBAdminRequestEvent> {
    const conn: IDBAdminOpen = connection
    const result: IDBDatabase = conn.target.result
    const hasObjectStore: boolean = !!result.objectStoreNames.length
    const notFoundError = new Error('NotFoundError: Object Store Keys not found')
    let keys: any

    return new Promise((resolve, reject) => {
      if (hasObjectStore) {
        keys = result.transaction(name).objectStore(name).getAllKeys()

        keys.onsuccess = (event: any) => resolve(event);
        keys.onerror = (event: any) => reject(event);
      } else {
        reject(notFoundError);
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

        values.onsuccess = (event: any) => resolve(event);
        values.onerror = (event: any) => reject(event);
      } else {
        reject(notFoundError);
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

        resolve(names);
      } else {
        reject(notFoundError);
      }
    })
  }
}

export default IDBAdminRequest;
