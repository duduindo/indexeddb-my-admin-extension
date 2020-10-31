import IDeviceBridge from './devices/IDeviceBridge'
import ITabsEventBridge from './ITabsEventBridge'


class Tabs implements ITabsEventBridge {
  private device: IDeviceBridge

  constructor(device: IDeviceBridge) {
    this.device = device
  }

  listener(callback: Function): void {
    this.device.listener((value: any) => callback(value))
  }
}


export default Tabs
