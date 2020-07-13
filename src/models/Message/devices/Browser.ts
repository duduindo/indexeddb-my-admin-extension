import IDeviceBridge from './IDeviceBridge'


class Browser implements IDeviceBridge {
  private origin: string
  private callback?: any

  constructor() {
    this.origin = location.origin
  }

  listener(callback: Function): void {
    this.callback = (event: MessageEvent) => {
      if (this.origin === event.origin) {
        callback(event.data);
      }
    }

    window.addEventListener('message', this.callback, false);
  }

  sendMessage(message: string, targetOrigin: string) {
    window.postMessage(message, targetOrigin);

    return Promise.resolve(true);
  }

  destroy() {
    window.removeEventListener('message', this.callback, false);
  }
}


export default Browser
