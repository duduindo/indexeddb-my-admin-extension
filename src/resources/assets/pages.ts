// import StorageTree from './svelte/components/StorageTree/Index.svelte'
import StorageTree from './svelte/components/StorageTree/Index.svelte'

// import TabsEventFactory from '@/models/TabsEvent/TabsEventFactory'
// import MessageFactory from '@/models/Message/MessageFactory'


// const message = MessageFactory()
// const tabs = TabsEventFactory()

// tabs.listener((data: any) => {
//   console.log('Tabs Evenet: ', data)
// })


// message.listener((request: any, sender: any) => {
//   console.log('Page: ', request)
// })

// document.addEventListener('click', () => {
//   console.log('Clicked')
//   message.send('Hello, Content (3)', 180)
// })

customElements.define('storage-tree', StorageTree)
