import get from 'lodash/get'
import browser from 'webextension-polyfill'
import Router from 'routes'
import type { RouterAction } from '@/types/global'


async function fetchContent(url: string, data?: any) {
  const { origin } = new URL(url)
  const tabs = await browser.tabs.query({ url: `${origin}/` })
  const id = get(tabs, '0.id')
  const action: RouterAction = { url, data }

  return browser.tabs.sendMessage(id, action)
}


export default fetchContent
