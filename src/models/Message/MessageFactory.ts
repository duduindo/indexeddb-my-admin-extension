import has from 'lodash/has'
import IDevice from './devices/IDevice'
import IMessageBridge from './IMessageBridge'
import Browser from './devices/Browser'
import Chrome from './devices/Chrome'
import Message from './Message'


function MessageFactory(): IMessageBridge {
  const isExtension = has(window, 'chrome.tabs.onUpdated.addListener') // Arrumar isso!!
  let device: IDevice = new Browser()

  if (isExtension) {
    device = new Chrome()
  }

  return new Message(device)
}


export default MessageFactory
