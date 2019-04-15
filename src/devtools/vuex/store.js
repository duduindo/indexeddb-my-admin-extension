import store from './modules/store/index.js'
import tab from './modules/tab/index.js'
import tree from './modules/tree/index.js'
import createOnMessagePlugin from './plugins/createOnMessagePlugin.js'


const plugins = [
  createOnMessagePlugin(chrome.runtime.onMessage)
]

export default {
  modules: {
    store,
    tab,
    tree
  },
  plugins,
  strict: true
}
