import IDBAdminRequest from '@/content/IDBAdminRequest'


class IDBAdmin extends IDBAdminRequest {
  async getStoreNamesToArray(): Promise<IDBAdminResponse> {
    let conn: IDBAdminOpen
    let list: Array<string> = []

    try {
      conn = await this.open()
      list = Array.from(conn.target.result.objectStoreNames)

      return {
        data: list,
        text: 'Success',
        type: 'success',
        timeStamp: conn.timeStamp
      }
    } catch (e) {
      return {
        data: list,
        text: e.toString(),
        type: 'error',
        timeStamp: 0
      }
    }
  }

  async getAllKeysFromObjectStore(name: string): Promise<IDBAdminResponse> {
    let conn: IDBAdminOpen
    let request: IDBAdminRequestEvent
    let list: Array<any> = []

    try {
      conn = await this.open()
      request = await this.requestObjectStoreKeys(conn, name)
      list = request.target.result

      return {
        data: list,
        text: 'Success',
        type: 'success',
        timeStamp: conn.timeStamp + request.timeStamp
      }
    } catch (e) {
      return {
        data: list,
        text: e.toString(),
        type: 'error',
        timeStamp: 0
      }
    }
  }

  async getAllValuesFromObjectStore(name: string): Promise<IDBAdminResponse> {
    let conn: IDBAdminOpen
    let request: IDBAdminRequestEvent
    let data: Object = {}

    try {
      conn = await this.open()
      request = await this.requestObjectStoreValues(conn, name)
      data = request.target.result

      return {
        data,
        text: 'Success',
        type: 'success',
        timeStamp: conn.timeStamp + request.timeStamp
      }
    } catch (e) {
      return {
        data,
        text: e.toString(),
        type: 'error',
        timeStamp: 0
      }
    }
  }

  async getIndexesFromObjectStore(name: string): Promise<IDBAdminResponse> {
    let conn: IDBAdminOpen
    let data: Object = {}

    try {
      conn = await this.open()
      data = await this.requestIndexesFromObjectStore(conn, name)

      return {
        data,
        text: 'Success',
        type: 'success',
        timeStamp: conn.timeStamp
      }
    } catch (e) {
      return {
        data,
        text: e.toString(),
        type: 'error',
        timeStamp: 0
      }
    }
  }

  async getAllFromObjectStore(name: string): Promise<IDBAdminResponse> {
    let conn: IDBAdminOpen
    let requestObjectStore: IDBObjectStore
    let requestKeys: IDBAdminRequestEvent
    let requestValues: IDBAdminRequestEvent
    let data: IDBAdminResponseDataGetAll = { keyPath: '', keys: [], values: [] }

    try {
      conn = await this.open()
      requestObjectStore = await this.requestObjectStore(conn, name)
      requestKeys = await this.requestObjectStoreKeys(conn, name)
      requestValues = await this.requestObjectStoreValues(conn, name)

      data = {
        keyPath: requestObjectStore.keyPath,
        keys: requestKeys.target.result,
        values: requestValues.target.result
      }

      return {
        data,
        text: 'Success',
        type: 'success',
        timeStamp: conn.timeStamp + requestKeys.timeStamp + requestValues.timeStamp
      }
    } catch (e) {
      return {
        data,
        text: e.toString(),
        type: 'error',
        timeStamp: 0
      }
    }
  }

  async getAllFromObjectStoreSearch(name: string, terms: string): Promise<IDBAdminResponse> {
    const allObjectStore: IDBAdminResponse = await this.getAllFromObjectStore(name)
    const searchElement: string = terms.toLowerCase()
    let data: IDBAdminResponseDataGetAll = { keyPath: '', keys: [], values: [] }
    const keyPath: string = allObjectStore.data.keyPath
    let values: Array<any> = []
    let keys: Array<any> = []

    values = allObjectStore.data.values.map((value: object) => JSON.stringify(value))
    values = values.filter((value: string) => value.toLowerCase().match(searchElement))
    values = values.map((value: string) => JSON.parse(value))
    keys = values.map((value: any) => value[keyPath])

    data = {
      keyPath,
      keys,
      values
    }

    return {
      data,
      text: 'Success',
      type: 'success',
      timeStamp: 0
    }
  }

  async getDatabaseTree(): Promise<IDBAdminResponse> {
    const storeNames: IDBAdminResponse = await this.getStoreNamesToArray()
    const database = { name: this.name, version: this.version, stores: [] }
    let tree: Array<Promise <never>> = []

    tree = storeNames.data.map(async (name: string) => {
      const { data: indexes }: IDBAdminResponse = await this.getIndexesFromObjectStore(name)

      return {
        name,
        indexes
      }
    })

    database.stores = await Promise.all(tree)

    return {
      data: database,
      text: 'Success',
      type: 'success',
      timeStamp: 0
    }
  }


  async insertObjectStoreContent(name: string, value: object): Promise<IDBAdminResponse> {
    let conn: IDBAdminOpen
    let request: IDBObjectStore

    try {
      conn = await this.open()
      request = await this.requestObjectStore(conn, name, 'readwrite')

      request.put(value)

      return {
        data: 'success',
        text: 'Success',
        type: 'success',
        timeStamp: conn.timeStamp
      }
    } catch (e) {
      return {
        data: 'error',
        text: e.toString(),
        type: 'error',
        timeStamp: 0
      }
    }
  }


  async deleteObjectStoreContent(name: string, key: any): Promise<IDBAdminResponse> {
    let conn: IDBAdminOpen
    let request: IDBObjectStore

    try {
      conn = await this.open()
      request = await this.requestObjectStore(conn, name, 'readwrite')

      request.delete(key)

      return {
        data: 'success',
        text: 'Success',
        type: 'success',
        timeStamp: conn.timeStamp
      }
    } catch (e) {
      return {
        data: 'error',
        text: e.toString(),
        type: 'error',
        timeStamp: 0
      }
    }
  }

  async getAllFromIndex(name: string, nameIndex: string): Promise<IDBAdminResponse> {
    let conn: IDBAdminOpen
    let data: IDBAdminResponseDataGetAll = { keyPath: '', keys: [], values: [] }
    let index: IDBIndex
    let values: IDBAdminRequestEvent
    let keys: IDBAdminRequestEvent
    let cursor: IDBAdminRequestEvent


    try {
      conn = await this.open()
      index = await this.requestObjectStoreIndex(conn, name, nameIndex)
      values = await this.requestObjectStoreIndexValues(conn, name, nameIndex)
      keys = await this.requestObjectStoreIndexKeys(conn, name, nameIndex)
      cursor = await this.requestIndexOpenCursor(conn, name, nameIndex)

      data = {
        keyPath: index.keyPath,
        keys: keys.target.result,
        values: values.target.result,
        // valuesIndex: values.target.result.map((value: any) => value[index.keyPath])
      }

      return {
        data,
        text: 'Success',
        type: 'success',
        timeStamp: 0
      }
    } catch (e) {
      return {
        data,
        text: e.toString(),
        type: 'error',
        timeStamp: 0
      }
    }
  }
}

export default IDBAdmin
