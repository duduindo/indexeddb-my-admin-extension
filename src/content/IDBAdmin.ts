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
    } catch(e) {
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
    } catch(e) {
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
    } catch(e) {
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
    let request: IDBAdminRequestEvent
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
    } catch(e) {
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
    } catch(e) {
      return {
        data,
        text: e.toString(),
        type: 'error',
        timeStamp: 0
      }
    }
  }

  async getAllFromObjectStoreSearch(name: string, terms: string): Promise<IDBAdminResponse> {
    // let conn: IDBAdminOpen
    // let allObjectStore: IDBAdminResponse
    // let data: Object = {}
    // let cursor: IDBCursorWithValue
    // let keys: Array<any> = []
    // let values: Array<any> = []
    // let keyPath: string | number

    const allObjectStore: IDBAdminResponse = await this.getAllFromObjectStore(name)
    const searchElement: string = terms.toLowerCase()
    const keyPath: string | number = allObjectStore.data.keyPath
    let values: Array<any> = []
    let keys: Array<any> = []

    values = allObjectStore.data.values.map((value: object) => JSON.stringify(value))
    values = values.filter((value: string) => value.toLowerCase().match(searchElement))
    values = values.map((value: string) => JSON.parse(value))

    keys = allObjectStore.data.keys.filter((value: any) => (value))

    console.warn( keys )

    return allObjectStore

    // try {


    //   console.warn( allObjectStore )

    //   return {
    //     data,
    //     text: 'Success',
    //     type: 'success',
    //     timeStamp: 10
    //   }
    // } catch(e) {
    //   return e
    // }
  }

  async BACKUPgetAllFromObjectStoreSearch(name: string, terms: string): Promise<IDBAdminResponse | any> {
    let conn: IDBAdminOpen
    let requestOpenCursor: IDBAdminRequestEvent
    let data: Array<any> = []
    let cursor: IDBCursorWithValue
    let keys: Array<any> = []
    let values: Array<any> = []
    let keyPath: string | number

    try {
      conn = await this.open()
      requestOpenCursor = await this.requestOpenCursor(conn, name)
      cursor = requestOpenCursor.target.result

      if (cursor) {
        data.push(cursor.value)

        console.warn( cursor.continue.toString() )

        cursor.continue()
      } else {
        return {
          data,
          text: 'Success',
          type: 'success',
          timeStamp: conn.timeStamp + requestOpenCursor.timeStamp
        }
      }
    } catch(e) {
      return {
        data,
        text: e.toString(),
        type: 'error',
        timeStamp: 0
      }
    }
  }

}

export default IDBAdmin;
