import get from 'lodash/get';
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
  message.send('Hello, Pages (3)!')
})
