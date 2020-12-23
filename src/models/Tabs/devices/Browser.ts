import IDevice from './IDevice'


class Browser implements IDevice {
  getFirstIdOfHost(host: string): Promise<number> {
    return Promise.resolve(0)
  }
}

export default Browser
