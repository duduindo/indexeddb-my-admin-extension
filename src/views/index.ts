// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Vuex from 'vuex'
// import ElementUI from 'element-ui'
// // import 'element-ui/lib/theme-chalk/index.css';
// import { sync } from 'vuex-router-sync'

// import { routes } from './vue/router/router-config'
// import Store from './vue/vuex/store'

// import App from './vue/App.vue'


// Vue.config.productionTip = false;
// Vue.config.devtools = false;

// Vue.use(ElementUI)
// Vue.use(VueRouter)
// Vue.use(Vuex)


// // Vuex
// // @ts-ignore
// const store = new Vuex.Store(Store)

// // Router
// const router = new VueRouter({
//   routes,
//   mode: 'hash'
// })

// // Sync
// sync(store, router)


// new Vue({
//   router,
//   store,
//   render(create) {
//     return create(App)
//   }
// }).$mount('#app')

import App from 'views/svelte/App.svelte'
// @ts-ignore
// import 'foundation-sites'

const app = new App({ target: document.getElementById('app') })

export default app
