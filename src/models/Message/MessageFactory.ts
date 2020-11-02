import get from 'lodash/get'
import IDevice from './devices/IDevice'
import IMessageBridge from './IMessageBridge'
import Browser from './devices/Browser'
import Chrome from './devices/Chrome'
import Message from './Message'


function MessageFactory(): IMessageBridge {
  const isContent = get(window, 'chrome.runtime.id')
  let device: IDevice = new Browser()

  if (isContent) {
    device = new Chrome()
  }

  return new Message(device)
}


export default MessageFactory
