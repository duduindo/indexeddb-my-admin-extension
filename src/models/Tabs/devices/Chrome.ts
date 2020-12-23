import IDevice from './IDevice'


class Chrome implements IDevice {
  getFirstIdOfHost(host: string): Promise<number> {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({ status: 'complete' }, tabs => {
        const found = tabs.find(tab => tab.url.includes(host))

        if (found) {
          resolve(found.id)
        } else {
          reject('Host not found')
        }
      })
    });
  }
}

export default Chrome
