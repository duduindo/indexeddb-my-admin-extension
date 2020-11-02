import uniqBy from 'lodash/uniqBy'
import IDevice from './IDevice'
import type { Tab } from '../types'


class Chrome implements IDevice {
  private filterTabNative(tabNative: chrome.tabs.Tab) {
    const { status = '', url = '' } = tabNative
    const filtered = status === 'complete' && url.startsWith('http')

    return filtered
  }

  private getTabsNative(): Promise<chrome.tabs.Tab[]> {
    return new Promise(resolve => chrome.tabs.query({}, tabsNative => {
      const tabs = tabsNative.filter(tab => this.filterTabNative(tab))

      return resolve(tabs)
    }))
  }

  private nativeToTab(tabNative: chrome.tabs.Tab): Tab {
    const { id = 0, url = '' } = tabNative
    const { host } = new URL(url)
    const tab: Tab = { id, host }

    return tab
  }

  private removeDuplicateTabs(tabs: Tab[]): Tab[] {
    return uniqBy(tabs, tab => tab.host)
  }

  private async getTabs(): Promise<Tab[]> {
    const tabsNative = await this.getTabsNative()
    const tabsDuplicate = tabsNative.map(tab => this.nativeToTab(tab))
    const tabs = this.removeDuplicateTabs(tabsDuplicate)

    return tabs
  }

  listener(callback: Function): void {
    chrome.tabs.onUpdated.addListener(async () => callback(await this.getTabs()))
    chrome.tabs.onRemoved.addListener(async () => callback(await this.getTabs()))
  }
}


export default Chrome
