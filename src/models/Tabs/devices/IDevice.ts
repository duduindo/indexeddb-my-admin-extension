interface IDevice {
  getFirstIdOfHost(host: string): Promise<number>
}


export default IDevice
