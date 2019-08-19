import Index from './'
import Content from './children/Content'
import Header from './components/Header'


export const route = {
  path: '/object-store/:database/:version/:store',
  component: Index,
  children: [
    {
      path: 'content',
      alias: '',
      components: {
        default: Content,
        header: Header
      }
    }
  ]
}
