import has from 'lodash/has'
import ITabsEventBridge from './ITabsEventBridge'
import IDeviceBridge from './devices/IDeviceBridge'
import Browser from './devices/Browser'
import Chrome from './devices/Chrome'
import TabsEvent from './TabsEvent'


function TabsEventFactory(): ITabsEventBridge {
  const isChrome = has(window, 'chrome.tabs.onUpdated.addListener');
  let device: IDeviceBridge = new Browser()

  if (isChrome) {
    device = new Chrome()
  }

  return new TabsEvent(device)
}


export default TabsEventFactory;
