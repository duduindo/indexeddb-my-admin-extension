import Index from './Index.vue'
import Content from './children/Content.vue'
// import Insert from './children/Insert'
// import Header from './components/Header'


export const route = {
  path: '/table/:storage/:database/:version/:table/',
  component: Index,
  children: [
    {
      path: 'content',
      name: 'table-content',
      alias: '',
      components: {
        default: Content,
        // header: Header
      }
    },
    {
      path: 'insert/(add|clone|update)/',
      name: 'table-insert',
      // components: {
      //   default: Insert,
      //   header: Header
      // }
    }
  ]
}
