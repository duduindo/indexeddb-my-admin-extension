type Open = {
  target: IDBOpenDBRequest
}

type IDBRequestEvent = {
  target: IDBRequest
}


class IDBAdmin {
  constructor(private name: string, private version: number) {}

  private open(): Promise<Open> {
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

  private async requestObjectStoreKeys(connection: Open, name: string): Promise<IDBRequestEvent> {
    const conn: Open = connection
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


  async getStoreNamesToArray(): Promise<IDBAdminResponse> {
    let conn: Open
    let list: Array<string> = []

    try {
      conn = await this.open()
      list = Array.from(conn.target.result.objectStoreNames)

      return {
        data: list,
        text: 'Success',
        type: 'success'
      }
    } catch(e) {
      return {
        data: list,
        text: e.toString(),
        type: 'error'
      }
    }
  }

  async getAllKeysFromObjectStore(name: string): Promise<IDBAdminResponse> {
    let conn: Open
    let request: IDBRequestEvent
    let list: Array<any> = []

    try {
      conn = await this.open()
      request = await this.requestObjectStoreKeys(conn, name)
      list = request.target.result

      return {
        data: list,
        text: 'Success',
        type: 'success'
      }
    } catch(e) {
      return {
        data: list,
        text: e.toString(),
        type: 'error'
      }
    }
  }
}

export default IDBAdmin;
