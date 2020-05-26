import IDeviceBridge from './IDeviceBridge'


class Browser implements IDeviceBridge {
  private origin: string

  constructor() {
    this.origin = location.origin
  }

  listener(callback: Function): void {
    window.addEventListener('message', (event: MessageEvent) => {
      if (this.origin === event.origin) {
        callback(event.data);
      }
    }, false);
  }

  sendMessage(message: string, targetOrigin: string) {
    window.postMessage(message, targetOrigin);

    return Promise.resolve(true);
  }
}


export default Browser
