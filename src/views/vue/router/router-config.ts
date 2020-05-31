import Example from './pages/Example.vue'
// import { route as dabatase } from '@/devtools/pages/Database/route'
import { route as table } from '@/views/vue/router/pages/Table/route'
// import { route as index } from '@/devtools/pages/Index/route'



// export const routes = [
//   {
//     path: '/',
//     component: Test,
//     children: []
//   },
//   dabatase,
//   index,
//   objectStore
// ]

export const routes = [
  {
    path: '/',
    component: Example,
    children: []
  },
  table
]

