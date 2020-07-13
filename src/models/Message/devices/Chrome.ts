import IDeviceBridge from './IDeviceBridge'


class Chrome implements IDeviceBridge {
  listener(callback: Function): void {
    chrome.runtime.onMessage.addListener((request, tab) => callback(request, tab))
  }

  sendMessage(message: ChromeExtensionSend) {
    return new Promise((resolved, rejected) => {
      chrome.tabs.sendMessage(message.id, message.value, function (response) {
        resolved(response)
      })
    })
  }

  destroy(): void {}
}


export default Chrome
