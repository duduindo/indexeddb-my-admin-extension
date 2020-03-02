import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'

import { routes } from './vue/router/router-config'
import Store from './vue/vuex/store'

import vuetify from './vue/plugins/vuetify' // path to vuetify export
import App from './vue/App.vue'


Vue.use(VueRouter)
Vue.use(Vuex)


// Vuex
const store = new Vuex.Store(Store)

// Router
const router = new VueRouter({
  routes,
  mode: 'hash'
})

// Sync
sync(store, router)


new Vue({
  router,
  store,
  vuetify,
  render(create) {
    return create(App)
  }
}).$mount('#app')
