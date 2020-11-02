import IDevice from './devices/IDevice'
import IMessageBridge from './IMessageBridge'


class Message implements IMessageBridge {
  private device: IDevice

  constructor(device: IDevice) {
    this.device = device
  }

  listener(callback: Function): void {
    this.device.onmessage((...params: any) => callback(...params))
  }

  send(message: any, target?: string|number): void {
    this.device.postMessage(message, target)
  }
}


export default Message
