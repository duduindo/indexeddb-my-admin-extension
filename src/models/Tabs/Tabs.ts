import IDevice from './devices/IDevice'
import ITabsBridge from './ITabsBridge'


class Tabs implements ITabsBridge {
  private device: IDevice

  constructor(device: IDevice) {
    this.device = device
  }

  getFirstIdOfHost(host: string): Promise<number> {
    return this.device.getFirstIdOfHost(host)
  }
}


export default Tabs
