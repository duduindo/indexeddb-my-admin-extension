import Database from '@/devtools/pages/Database'
import EditStore from '@/devtools/pages/EditStore'
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
    component: EditStore,
    children: []
  }
]
