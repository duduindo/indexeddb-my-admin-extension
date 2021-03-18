import browser from 'webextension-polyfill'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import uniqBy from 'lodash/uniqBy'


class TabsEvent {
  private filterHTTP(tabs: any[]) {
    return tabs.filter(tab => get(tab, 'url', '').startsWith('http'))
  }

  private getDatas(tabs: any[]) {
    return tabs.map(tab => {
      const { origin, host } = new URL(tab.url)
      const { favIconUrl: favicon, title } = tab

      return { origin, host, favicon, title }
    })
  }

  private uniqueByHost(tabs: any[]) {
    return uniqBy(tabs, (tab: URL) => tab.host)
  }

  private sortByHost(tabs: any[]) {
    return sortBy(tabs, 'host')
  }

  private async getTabs(): Promise<any[]> {
    let tabs = await browser.tabs.query({ status: 'complete' })

    tabs = this.filterHTTP(tabs)
    tabs = this.getDatas(tabs)
    tabs = this.uniqueByHost(tabs)
    tabs = this.sortByHost(tabs)

    return tabs
  }

  async listener(callback: Function): Promise<void> {
    const origins = await this.getTabs()

    browser.tabs.onUpdated.addListener(async () => callback(await this.getTabs()))
    browser.tabs.onRemoved.addListener(async () => callback(await this.getTabs()))
    callback(origins)
  }
}


export default TabsEvent
