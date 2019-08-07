/**
 * Reference:
 * - https://github.com/redux-utilities/flux-standard-action#actions
 */
interface Action<Payload> {
  type: string;
  payload: Payload;
  error?: boolean;
  meta?: Object;
}

type createObjectStoreProperties = {
  name: string,
  keyPath?: string,
  autoIncrement?: boolean
}

type addObjectProperties = {
  value: object,
  key?: any
}


// Old
type IDBAdminResponse = {
  data: any,
  text: string,
  type: 'error' | 'success' | 'warning',
  timeStamp: number
}

// Old
type IDBAdminOpen = {
  target: IDBOpenDBRequest,
  timeStamp: number
}

// Old
type IDBAdminRequestEvent = {
  target: IDBRequest,
  timeStamp: number
}

// Old
type IDBAdminResponseDataGetAll = {
  keyPath: string | string[],
  keys: Array<any>,
  values: Array<object>,
  valuesIndex?: Array<any>
}
