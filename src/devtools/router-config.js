import Test from '@/devtools/pages/Test'
import { route as dabatase } from '@/devtools/pages/Database/route'
import { route as objectStore } from '@/devtools/pages/ObjectStore/route'
import { route as index } from '@/devtools/pages/Index/route'


export const routes = [
  {
    path: '/',
    component: Test,
    children: []
  },
  dabatase,
  index,
  objectStore
]
