import { readable } from 'svelte/store'
import TabsEvent from '@/models/TabsEvent/TabsEvent'
import browser from 'webextension-polyfill'


const params = new URLSearchParams(location.search)
const tabsEvent = new TabsEvent()

// Readable
const optionsTabs = readable([], set => {
  tabsEvent.listener((data: any[]) => {
    const options = data.map(tab => {
      const { origin, host, favicon, title } = tab
      const isSelected = origin === params.get('origin')

      return { origin, host, favicon, title, isSelected }
    })

    set(options)
  })
})


export {
  optionsTabs,
}
