import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import LiquorTree from 'liquor-tree'
import { sync } from 'vuex-router-sync'
import VueJsonPretty from 'vue-json-pretty'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRedo, faCaretLeft, faCaretRight, faBroom, faTrashAlt, faCopy, faClone, faEdit, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { routes } from '@/devtools/router-config'
import Store from '@/devtools/vuex/store'
import '@/devtools/assets/array-filter-index'

Vue.config.devtools = false
Vue.config.productionTip = false

library.add(faRedo, faCaretLeft, faCaretRight, faBroom, faTrashAlt, faCopy, faClone, faEdit, faPlus, faJs, faTimesCircle)

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(LiquorTree)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-json-pretty', VueJsonPretty)

// Vuex
const store = new Vuex.Store(Store)

// Router
const router = new VueRouter({
  routes,
  mode: 'hash'
})

// Sync
sync(store, router)


export default Vue
