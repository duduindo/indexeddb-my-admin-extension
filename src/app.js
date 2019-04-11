import Vue from 'vue'
import App from './App.vue'


chrome.devtools.panels.create('IndexedDBMyAdmin', '', 'devtools.html', function(panel) {
  new Vue({
    el: '#app',
    render: h => h(App)
  })
})
