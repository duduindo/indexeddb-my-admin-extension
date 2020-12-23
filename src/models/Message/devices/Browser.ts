import uniqueId from 'lodash/uniqueId'
import IDevice from './IDevice'


class Browser implements IDevice {
  private channelName = uniqueId('BROWSER_CHANNEL_')
  private channel = new BroadcastChannel(this.channelName);

  onmessage(callback: Function): void {
    this.channel.onmessage = event => callback(event.data)
  }

  postMessage(message: string) {
    this.channel.postMessage(message)
  }
}


export default Browser
