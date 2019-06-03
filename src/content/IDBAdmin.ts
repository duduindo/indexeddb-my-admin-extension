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
      request.onblocked = (event: any) => {
        const env = {
          ...event,
          toString: () => `Altered version from ${event.oldVersion} to ${event.newVersion}`
        }

        reject(env)
      }
    })
  }

  async getStoreNamesToArray(): Promise<IDBAdminResponse> {
    let db: Open
    let list: Array<string> = []

    try {
      db = await this.open()
      list = Array.from(db.target.result.objectStoreNames)

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
