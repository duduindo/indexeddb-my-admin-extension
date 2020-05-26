import IDeviceBridge from './devices/IDeviceBridge'
import IMessageBridge from './IMessageBridge'


class Message implements IMessageBridge {
  private device: IDeviceBridge

  constructor(device: IDeviceBridge) {
    this.device = device
  }

  listener(callback: Function): void {
    this.device.listener((value: any) => callback(value))
  }

  send(message: any, option?: any) {
    return this.device.sendMessage(message, option)
  }
}


export default Message
