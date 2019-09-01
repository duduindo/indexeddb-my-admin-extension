import Index from './'
import Content from './children/Content'
import Insert from './children/Insert'
import Header from './components/Header'


export const route = {
  path: '/object-store/:database/:version/:store',
  component: Index,
  beforeEnter(to, from, next) {
    // console.log(to, from, next)

    if (to === from) {
      console.log('é o msm')
    }

    return next()
  },
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
      path: 'insert*',
      name: 'object-store-insert',
      components: {
        default: Insert,
        header: Header
      }
    }
  ]
}
