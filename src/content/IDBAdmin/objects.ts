class IDBAObjects {
  constructor(public name: string, public version: number, public store: string) {}

  private openDatabase(): Promise<any> {
    const {name, version} = this
    const request = window.indexedDB.open(name, version)

    return new Promise((resolve, reject) => {
      request.onupgradeneeded = event => resolve(event)
      request.onsuccess = event => resolve(event)
      request.onblocked = event => resolve(event)
      request.onerror = event => reject(event)
    })
  }

  async get(keys: any[] = []) {
    const { store } = this
    let request: any = null
    let result: any = null
    let objectStore: any = null
    let promises: any[] = []

    try {
      request = await this.openDatabase()
      result = request.target.result
      objectStore = result.transaction(store).objectStore(store)
      promises = keys.map((key: any) => {
        return new Promise((resolve, reject) => {
          const got = objectStore.get(key)

          got.onsuccess = (event: any) => resolve(event)
          got.onerror = (event: any) => reject(event)
        })
      })

      return Promise.all(promises)
    } catch(error) {
      return error
    } finally {
      result.close()
    }
  }

}


export default IDBAObjects
