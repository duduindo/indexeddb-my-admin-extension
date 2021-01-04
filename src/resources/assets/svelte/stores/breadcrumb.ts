import { readable, writable } from 'svelte/store'
import Breadcrumb from '@/models/Breadcrumb/Breadcrumb'

const breadcrumb = new Breadcrumb()
const items = writable([])

function setBreadcrumb(name: string, href?: string) {
  breadcrumb.setItem(name, href)

  items.set(breadcrumb.getItems())
}

setBreadcrumb('Home', '/pages/index.html')

export {
  items,
  setBreadcrumb
}
