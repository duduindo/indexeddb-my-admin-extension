interface IDeviceBridge {
  /**
   * @param $callback function
   *
   * @return void
   */
  listener(callback: Function): void
}

export default IDeviceBridge
