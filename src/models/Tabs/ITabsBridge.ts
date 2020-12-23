interface ITabsBridge {
  getFirstIdOfHost(host: string): Promise<number>
}

export default ITabsBridge
