import AddObjectStore from '@/devtools/pages/AddObjectStore'
import Database from '@/devtools/pages/Database'
import EditObjectStore from '@/devtools/pages/EditObjectStore'
import Store from '@/devtools/pages/Store'
import PaginationStore from '@/devtools/components/PaginationStore'
import Test from '@/devtools/pages/Test'


export const routes = [
  {
    path: '/',
    component: Test,
    children: []
  },
  {
    path: '/database/:database/:version/',
    component: Database,
    children: []
  },
  {
    path: '/store/:database/:version/:store/',
    components: {
      default: Store,
      header: PaginationStore
    },
    children: []
  },
  {
    path: '/edit/store/:database/:version/:store/',
    component: EditObjectStore,
    children: []
  },
  {
    path: '/add/store/:database/:version/:store/',
    component: AddObjectStore,
    children: []
  }
]
