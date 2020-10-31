import IDeviceBridge from './IDeviceBridge'
import type { Tab } from '../types'


class Browser implements IDeviceBridge {
  listener(callback: Function): void {
    const tabs: Tab[] = [{ id: 0, host: location.host }];

    callback(tabs)
  }
}


export default Browser
