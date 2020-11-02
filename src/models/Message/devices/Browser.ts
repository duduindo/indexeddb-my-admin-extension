import IDevice from './IDevice'


class Browser implements IDevice {
  private origin = location.origin

  onmessage(callback: Function): void {
    window.addEventListener('message', event => callback(event), false)
  }

  postMessage(message: string) {
    window.postMessage(message, this.origin)
  }
}


export default Browser
