import { writable } from 'svelte/store'
import { location, querystring } from 'svelte-spa-router'
import Browser from '@/models/Message/devices/Browser'
import Message from '@/models/Message/Message'

const device = new Browser()
const messenger = new Message(device)


function request(type, payload) {
  const origin = 'DEVTOOLS'

  messenger.send({
    payload,
    type,
    origin
  });
}


function createData() {
  const { subscribe, set, update } = writable(0);

  messenger.listener(action => {
    const isOriginContent = action.origin === 'CONTENT';

    if (isOriginContent) {
      set(action)
    }
  })

  return {
    subscribe,
    request,
  }
}


export const data = createData();
