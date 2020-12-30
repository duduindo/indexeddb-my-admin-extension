import { readable } from 'svelte/store'
import TabsEvent from '@/models/TabsEvent/TabsEvent'
import browser from 'webextension-polyfill'


const params = new URLSearchParams(location.search)
const tabsEvent = new TabsEvent()

// Readable
const optionsTabs = readable([], set => {
  tabsEvent.listener((data: any[]) => {
    let options = []

    options = data.map(tab => {
      const value = tab.origin
      const text = tab.host
      const isSelected = tab.origin === params.get('origin')
      const url = browser.runtime.getURL(`/pages/index.html?origin=${value}`)

      return { value, text, isSelected, url }
    })

    set(options)
  })
})


export {
  optionsTabs,
}
