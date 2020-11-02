import has from 'lodash/has'
import IDevice from './IDevice'


class Chrome implements IDevice {
  onmessage(callback: Function): void {
    chrome.runtime.onMessage.addListener((request, sender) => callback(request, sender))
  }

  postMessage(message: string, tabId: number) {
    const isPages = has(window, 'chrome.tabs.onUpdated.addListener')

    if (isPages) {
      chrome.tabs.sendMessage(tabId, message)
    } else {
      chrome.runtime.sendMessage(message)
    }
  }
}


export default Chrome
