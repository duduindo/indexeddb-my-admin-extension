import IndexedDB from '@/models/Database/drivers/IndexedDB'
import Database from '@/models/Database/interfaces/Admin'
import Browser from '@/models/Message/devices/Browser'
import Message from '@/models/Message/Message'

const device = new Browser()
const messenger = new Message(device)


messenger.listener((action: MessagePluginAction) => {
  // const action: MessagePluginAction = {
  //   value: 'Opaopaopa',
  //   type: 'TEST_HERE'
  // }

  // const driver = new IndexedDB();
  // const admin = new Database();

  // GET_STRUCTURE_FROM_DATABASE



})
