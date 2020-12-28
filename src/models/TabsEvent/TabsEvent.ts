import browser from 'webextension-polyfill'
import get from 'lodash/get'
import pick from 'lodash/pick'
import sortBy from 'lodash/sortBy'
import uniqBy from 'lodash/uniqBy'


class TabsEvent {
  private async getTabs(): Promise<any[]> {
    let tabs = await browser.tabs.query({ status: 'complete' })

    tabs = tabs.filter(tab => get(tab, 'url', '').startsWith('http'))
    tabs = tabs.map(tab => pick(new URL(tab.url), ['origin', 'host']))
    tabs = uniqBy(tabs, (tab: URL) => tab.host)
    tabs = sortBy(tabs, 'host')

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
