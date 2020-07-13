import IndexedDB from '@/models/Database/drivers/IndexedDB'
import Database from '@/models/Database/interfaces/Admin'
import Browser from '@/models/Message/devices/Browser'
import Message from '@/models/Message/Message'
import isUndefined from 'lodash/isUndefined'
import InterfaceBridge from '@/models/Database/interfaces/IInterfaceBridge'


const device = new Browser()
const messenger = new Message(device)


function openStorage(name: string, version: number, type: string = 'indexeddb'): InterfaceBridge {
  const connection = IndexedDB.openDatabase(name, version)
  const driver = new IndexedDB(connection);
  const admin = new Database(driver);

  return admin
}

// // ---------------------------------------------------
// class StorageRequests {
//   private request: any

//   setRequest(request: any) {
//     this.request = request
//   }

//   public getData() {
//     this.request.getData()
//   }
// }


// class RequestGetStructureFromDatabase {
//   private messenger: any

//   constructor(messenger: any) {
//     this.messenger = messenger
//   }

//   public getData() {
//     // this.messenger.send({
//     //   storage: payload.storage,
//     //   payload: await storage.getStructureFromDatabase(),
//     //   type: action.type,
//     //   origin: 'CONTENT'
//     // })
//   }
// }


// // const any = new Function
// // const context = new StorageRequests(any)

// // context.setRequest(new RequestGetStructureFromDatabase)

// // context.getData()

// // ---------------------------------------------------





async function handleListener(action: MessagePluginAction) {
  const { payload } = action;
  const storage = await openStorage(payload.database, payload.version, payload.storage)


  switch (action.type) {
    // Database
    case 'GET_STRUCTURE_FROM_DATABASE':
      messenger.send({
        storage: payload.storage,
        payload: await storage.getStructureFromDatabase(),
        type: action.type,
        origin: 'CONTENT'
      })
      break;

    // Table
    case 'GET_CONTENT_FROM_TABLE':
      messenger.send({
        storage: payload.storage,
        payload: await storage.getContentFromTable(payload.table),
        type: action.type,
        origin: 'CONTENT'
      })
      break;

    // Index
    case 'GET_CONTENT_FROM_INDEX':
      messenger.send({
        storage: payload.storage,
        payload: await storage.getContentFromIndex(payload.table, payload.index),
        type: action.type,
        origin: 'CONTENT'
      })
      break;
  }
}


messenger.listener((action: MessagePluginAction) => {
  const isActionDefined = !isUndefined(action.payload) && !isUndefined(action.type) && !isUndefined(action.origin);
  const isDevtools = action.origin === 'DEVTOOLS';

  if (isActionDefined && isDevtools) {
    handleListener(action);
  }
})
