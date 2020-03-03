import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import { sync } from 'vuex-router-sync'

import { routes } from './vue/router/router-config'
import Store from './vue/vuex/store'

import App from './vue/App.vue'


Vue.use(ElementUI)
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
  render(create) {
    return create(App)
  }
}).$mount('#app')
