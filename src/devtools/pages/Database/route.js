import Index from './'
import Content from './children/Content'


export const route = {
  path: '/database/:database/:version',
  component: Index,
  children: [
    {
      path: 'content',
      alias: '',
      component: Content
    }
  ]
}
