import Database from '@/pages/Database.vue'
import EditStore from '@/pages/EditStore.vue'
import Store from '@/pages/Store.vue'
import HeaderStore from '@/components/HeaderStore.vue'
import Test from '@/pages/Test.vue'


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
      header: HeaderStore
    },
    children: []
  },
  {
    path: '/edit/store/:database/:version/:store/',
    component: EditStore,
    children: []
  }
]
