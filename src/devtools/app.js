import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import VueJsonPretty from 'vue-json-pretty'
import { routes } from '@/router-config.js'
import App from '@/App.vue'
import Store from '@/vuex/store.js'
import '@/assets/array-filter-index.js'

Vue.config.devtools = false
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
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
      store.commit('SET_ID', tabs[0].id)

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
