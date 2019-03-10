
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

//   // Enviando
//   chrome.tabs.sendMessage(tabs[0].id, 'opa')

//   // Recebendo
//   chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     console.log(request);
//   })
// })



class Chrome {
  #opa = 10

  eventLoad(callback) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      callback(tabs)
    })
  }



  addEventListener(type, listener) {
    switch(type) {
      case 'load':
        this.eventLoad(listener)
        break;
    }
  }
}


export default Chrome;
