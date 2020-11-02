import get from 'lodash/get';
// chrome.runtime.onMessage.addListener((action, sender) => {
//   if (get(sender, 'id') === get(chrome, 'runtime.id')) {

//     // chrome.runtime.sendMessage('Hello, Pages!')
//     console.log('Content: ', action)
//   }
// })


// document.addEventListener('click', () => {
//   console.log('Has tabs?', chrome?.tabs?.query)

//   chrome.runtime.sendMessage('Hello, Pages 2! 12121')
// })


import MessageFactory from '@/models/Message/MessageFactory'


const message = MessageFactory()

message.listener((request: any, sender: any) => {
  const isFromExtension = get(sender, 'id') === get(chrome, 'runtime.id');

  if (isFromExtension) {
    console.log('Content: ', request)
  }
})


document.addEventListener('click', () => {
  console.log('Clicked')
  message.send('Hello, Pages (2)!')
})
