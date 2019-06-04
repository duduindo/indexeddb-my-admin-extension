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
}

export default IDBAdmin;
