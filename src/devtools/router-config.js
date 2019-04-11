import Database from '@/pages/Database'
import EditStore from '@/pages/EditStore'
import Store from '@/pages/Store'
import PaginationStore from '@/components/PaginationStore'
import Test from '@/pages/Test'


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
