import Index from './'
import Content from './children/Content'
import Insert from './children/Insert'
import Header from './components/Header'


export const route = {
  path: '/object-store/:database/:version/:store/',
  component: Index,
  children: [
    {
      path: 'content',
      name: 'object-store-content',
      alias: '',
      components: {
        default: Content,
        header: Header
      }
    },
    {
      path: 'insert/(add|clone)/',
      name: 'object-store-insert',
      components: {
        default: Insert,
        header: Header
      }
    }
  ]
}
