import has from 'lodash/has'
import ITabsEventBridge from './ITabsEventBridge'
import IDevice from './devices/IDevice'
import Browser from './devices/Browser'
import Chrome from './devices/Chrome'
import TabsEvent from './TabsEvent'


function TabsEventFactory(): ITabsEventBridge {
  const isPages = has(window, 'chrome.tabs.onUpdated.addListener')
  let device: IDevice = new Browser()

  if (isPages) {
    device = new Chrome()
  }

  return new TabsEvent(device)
}


export default TabsEventFactory
