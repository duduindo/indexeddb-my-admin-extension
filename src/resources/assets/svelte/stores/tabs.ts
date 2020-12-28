import { readable } from 'svelte/store'
import TabsEvent from '@/models/TabsEvent/TabsEvent'


const params = new URLSearchParams(location.search)
const tabsEvent = new TabsEvent()
const optionsTabs = readable([], set => {
  tabsEvent.listener((data: any[]) => {
    let options = []

    options = data.map(tab => {
      const value = tab.origin
      const text = tab.host
      const isSelected = tab.origin === params.get('origin')

      return { value, text, isSelected }
    })

    set(options)
  })
})


export {
  optionsTabs,
}
