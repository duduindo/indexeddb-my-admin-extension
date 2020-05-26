interface IDeviceBridge {
  /*
   * @param $callback function
   *
   * @return void
   */
  listener(callback: Function): void

  /*
   * @param message object
   * @param callback function
   * @param targetOrigin any
   *
   * @return void
   */
  sendMessage(message: any, targetOrigin?: any, callback?: Function): Promise<any>
}

export default IDeviceBridge
