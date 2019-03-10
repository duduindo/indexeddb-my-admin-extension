// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import { sync } from 'vuex-router-sync'
import { routes } from '@/router-config'
import Store from '@/vuex/store'
import BrowserExtensionSingleton from '@/api/browser-extension'

// Components
import App from '@/App'

const extension = new BrowserExtensionSingleton()


extension.onLoad(() => {
  // Use
  Vue.use(Router)
  Vue.use(Vuex)
  Vue.use(BootstrapVue)

  // Vuex
  const store = new Vuex.Store(Store)

  // Route
  const router = new Router({
    routes,
    mode: 'hash'
  })

  // Sync
  sync(store, router)

  // Vue
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
