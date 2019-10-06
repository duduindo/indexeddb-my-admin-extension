import Index from './'
import Content from './children/Content'
import Header from './components/Header'


export const route = {
  path: '/database/:database/:version',
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
