import ITabsBridge from './ITabsBridge'
import IDevice from './devices/IDevice'
import Browser from './devices/Browser'
import Chrome from './devices/Chrome'
import Tabs from './Tabs'


function TabsFactory(): ITabsBridge {
  const isPages = window?.chrome?.tabs?.onUpdated?.addListener
  let device: IDevice = new Browser()

  if (isPages) {
    device = new Chrome()
  }

  return new Tabs(device)
}


export default TabsFactory
