import MessageFactory from '@/models/Message/MessageFactory'


const message = MessageFactory()

message.listener((request: any, sender: any) => {
  console.log('Page: ', request, sender)
})


document.addEventListener('click', () => {
  message.send('Hello, Content (2)', 212)
})


// import TabsEventFactory from '@/models/TabsEvent/TabsEventFactory'


// TabsEventFactory().listener((data: any) => {
//   console.log('Tabs Evenet: ', data)
// })


// document.addEventListener('click', () => {
//   chrome.tabs.query({}, () => {
//     chrome.tabs.sendMessage(212, 'Hello, Content');
//   })
// })


chrome.runtime.onMessage.addListener((request, sender) => {
  // let url

  // if (url = sender?.tab?.url) {
    console.log('Page: ', request)
  // }
})
