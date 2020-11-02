interface IDevice {
  /**
   * @param callback function
   *
   * @return void
   */
  onmessage(callback: Function): void

  /**
   * @param message object
   * @ param callback function
   * @ param targetOrigin any
   *
   * @return void
   */
  postMessage(message: any, targetOrigin?: string|number): void
}

export default IDevice
