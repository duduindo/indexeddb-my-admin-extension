type IDBAdminResponse = {
  data: any,
  text: string,
  type: 'error' | 'success' | 'warning',
  timeStamp: number
}

type IDBAdminOpen = {
  target: IDBOpenDBRequest,
  timeStamp: number
}

type IDBAdminRequestEvent = {
  target: IDBRequest,
  timeStamp: number
}

type IDBAdminResponseDataGetAll = {
  keyPath: string | string[],
  keys: Array<any>,
  values: Array<object>
}
