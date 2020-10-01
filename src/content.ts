import IndexedDB from '@/models/Database/drivers/IndexedDB'
import Admin from '@/models/Database/interfaces/Admin'
import Browser from '@/models/Message/devices/Browser'
import Message from '@/models/Message/Message'
import isUndefined from 'lodash/isUndefined'
import InterfaceBridge from '@/models/Database/interfaces/IInterfaceBridge'
import IMessageBridge from '@/models/Message/IMessageBridge'
import IDeviceBridge from '@/models/Message/devices/IDeviceBridge'

const device = new Browser()
const messenger = new Message(device)


function openStorage(name: string, version: number, type: string = 'indexeddb'): InterfaceBridge {
  const connection = IndexedDB.openDatabase(name, version)
  const driver = new IndexedDB(connection);
  const admin = new Admin(driver);

  return admin
}


/* ------------------------------------------- */
class AdminFactory {
  static getConnection(name: string, version: number) {
    const connection = IndexedDB.openDatabase(name, version)
    const driver = new IndexedDB(connection);
    const admin = new Admin(driver);

    return admin
  }
}

class MessageFactory {
  static getMessage() {
    const device = new Browser()
    const messenger = new Message(device)

    return messenger
  }
}

// Strategy
interface DatabaseRequest {
  send(messenger: IMessageBridge,  action: MessagePluginAction): any;
}

// Context
class RequestController {
  private request?: DatabaseRequest
  private messenger: IMessageBridge = MessageFactory.getMessage()

  setRequest(request: DatabaseRequest) {
    this.request = request
  }

  send(action: MessagePluginAction) {
    if (this.request) {
      this.request.send(messenger, action)
    }
  }
}

// Concrete Strategy
class GetStructureFromDatabase implements DatabaseRequest {
  async send(messenger: IMessageBridge, action: MessagePluginAction) {
    const { payload } = action;
    const admin = await AdminFactory.getConnection(payload.database, payload.version)

    messenger.send({
      payload: await admin.getStructureFromDatabase(),
      type: action.type,
      origin: 'CONTENT'
    })
  }
}


// ------ Executing
const controller = new RequestController()

const actionFake = {
  payload: '',
  type: '',
  origin: '',
}


if (actionFake.type === 'GET_STRUCTURE_FROM_DATABASE') {
  controller.setRequest(new GetStructureFromDatabase)
}


controller.send(actionFake)
// ------ /Executing

/* ------------------------------------------- */


async function handleListener(action: MessagePluginAction) {
  const { payload } = action;

  const storage = await openStorage(payload.database, payload.version);


  switch (action.type) {
    // Database
    case 'GET_STRUCTURE_FROM_DATABASE':
      messenger.send({
        payload: await storage.getStructureFromDatabase(),
        type: action.type,
        origin: 'CONTENT'
      })
      break;

    // Table
    case 'GET_CONTENT_FROM_TABLE':
      messenger.send({
        payload: await storage.getContentFromTable(payload.table),
        type: action.type,
        origin: 'CONTENT'
      })
      break;

    // Index
    case 'GET_CONTENT_FROM_INDEX':
      messenger.send({
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
