const isExtension = chrome?.runtime?.onInstalled?.addListener


if (isExtension) {
  chrome.runtime.onInstalled.addListener(handleInstalled);

  function handleInstalled() {
    chrome.tabs.query({ status: 'complete' }, tabs => {
      tabs.forEach(tab => {
        if (tab.url.startsWith('http://localhost:8082/')) {
          chrome.tabs.executeScript(tab.id, { file: 'content.js' });
        }
      })
    })
  }
}
