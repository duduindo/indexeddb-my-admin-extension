
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

  // Enviando
  chrome.tabs.sendMessage(tabs[0].id, 'opa')

  // Recebendo
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
  })
})
