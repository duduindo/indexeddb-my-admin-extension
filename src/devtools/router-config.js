import Test from '@/devtools/pages/Test'
import { route as objectStore } from '@/devtools/pages/ObjectStore/route'


export const routes = [
  {
    path: '/',
    component: Test,
    children: []
  },
  objectStore
]
