import Index from './'
import Insert from './children/Insert'
import Content from './children/Content'


export const route = {
  path: '/index/:database/:version/:store/:index',
  component: Index,
  children: [
    {
      path: 'insert',
      component: Insert
    },
    {
      path: 'content',
      alias: '',
      component: Content
    }
  ]
}