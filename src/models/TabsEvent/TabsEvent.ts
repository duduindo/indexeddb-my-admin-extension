import IDevice from './devices/IDevice'
import ITabsEventBridge from './ITabsEventBridge'


class Tabs implements ITabsEventBridge {
  private device: IDevice

  constructor(device: IDevice) {
    this.device = device
  }

  listener(callback: Function): void {
    this.device.listener((value: any) => callback(value))
  }
}


export default Tabs
