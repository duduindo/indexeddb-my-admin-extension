import has from 'lodash/has'

const isChrome = has(window, 'chrome.runtime.getURL')

if (isChrome) {
  window.open(chrome.runtime.getURL('/pages/index.html'), '_blank');
}
