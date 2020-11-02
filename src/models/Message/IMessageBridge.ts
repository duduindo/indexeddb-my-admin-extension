/**
 * Example: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#Examples
 */

interface IMessageBridge {
  /**
   * @param $callback function
   *
   * @return void
   */
  listener(callback: Function): void

  /**
   * @param value any
   *
   * @return promise any
   */
  send(message: any, target?: string|number): void
}


export default IMessageBridge
