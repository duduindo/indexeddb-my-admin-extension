type Open = {
  target: IDBOpenDBRequest
}


class IDBAdmin {
  constructor(private name: string, private version: number) {}

  private open(): Promise<Open> {
    const request = window.indexedDB.open(this.name, this.version)

    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => resolve(event)
      request.onerror = (event: any) => reject(event)
      request.onblocked = (event: any) => reject(event)
    })
  }

  private async objectStore(name: string, mode: any = 'readonly'): Promise<IDBObjectStore> {
    const db = await this.open()

    return db.target.result.transaction(name, mode).objectStore(name)
  }

  async getStoreNamesToArray(): Promise<string[] | string> {
    let db: any
    let list: any
    let arList: any

    try {
      db = await this.open()
      list = db.target.result.objectStoreNames
      arList = Array.from(list)

      return arList
    } catch(e) {
      if ('newVersion' in e) {
        return `Altered version from ${e.oldVersion} to ${e.newVersion}`
      }

      return e.msg || e.toString()
    }
  }

  async getAllKeysFromObjectStore(name: string): Promise<(string | number)[]> {
    const objectStore = await this.objectStore(name)
    const keys = objectStore.getAllKeys()

    return new Promise((resolve, reject) => {
      keys.onsuccess = (event: any) => resolve(event.target.result);
      keys.onerror = (event: any) => reject(event);
    })
  }
}

export default IDBAdmin;
