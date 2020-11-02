import IDevice from './IDevice'
import type { Tab } from '../types'


class Browser implements IDevice {
  listener(callback: Function): void {
    const tabs: Tab[] = [{ id: 0, host: location.host }];

    callback(tabs)
  }
}


export default Browser
