import Index from './'
import Add from './children/Add'
import Content from './children/Content'
import Edit from './children/Edit'


export const route = {
  path: '/object-store/:database/:version/:store',
  component: Index,
  children: [
    {
      path: 'add',
      component: Add
    },
    {
      path: 'content',
      alias: '',
      component: Content
    },
    {
      path: 'edit',
      component: Edit
    }
  ]
}
