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

  async getStoreNamesToArray(): Promise<IDBAdminResponse> {
    let db: Open
    let list: Array<string> = []
    let text: string

    try {
      db = await this.open()
      list = Array.from(db.target.result.objectStoreNames)
      text = 'Success'

      return {
        data: list,
        text,
        type: 'success'
      }
    } catch(e) {
      text = e.toString()
      text = ('oldVersion' in e) ? `Altered version from ${e.oldVersion} to ${e.newVersion}` : text

      return {
        data: list,
        text,
        type: 'error'
      }
    }
  }


}

export default IDBAdmin;
