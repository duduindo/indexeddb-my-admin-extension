import browser from 'webextension-polyfill'
import Router from 'routes'
import type { RouterAction } from '@/types/global'


async function fetchContent(url: string, data?: any) {
  const { origin } = new URL(url)
  const tabs = await browser.tabs.query({ status: 'complete' })
  const tabFound = tabs.find(tab => tab.url.startsWith(origin))
  const action: RouterAction = { url, data }

  if (!tabFound?.id) {
    throw new Error(`URL (${origin}) not found from tabs`)
  }

  return browser.tabs.sendMessage(tabFound.id, action)
}


export default fetchContent
