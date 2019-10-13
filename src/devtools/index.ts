// Libraries
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueCompositionApi from '@vue/composition-api'
import LiquorTree from 'liquor-tree'
import { sync } from 'vuex-router-sync'
import VueJsonPretty from 'vue-json-pretty'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Commons and Components
import * as faIcons from '@/common/ts/components/Icons'
import { routes } from './router-config'
import App from './App.vue'
import Store from './components/Vuex/store'


Vue.config.devtools = false
Vue.config.productionTip = false

// @ts-ignore
library.add(faIcons)

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueCompositionApi)
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


// Panel
chrome.devtools.panels.create('IndexedDBMyAdmin', '', 'devtools.html', function(panel) {
  // Tabs
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const hasTab = tabs.length

    if (hasTab) {
      // store.commit('SET_ID', tabs[0].id)

      // Vue
      new Vue({
        router,
        store,
        render(create) {
          return create(App)
        }
      }).$mount('#app')
    }
  })
})
