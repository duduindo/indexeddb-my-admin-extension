import objectStore from './modules/objectStore/index'
import tab from './modules/tab/index'
import tree from './modules/tree/index'
import createOnMessagePlugin from './plugins/createOnMessagePlugin'


const plugins = [
  createOnMessagePlugin(chrome.runtime.onMessage)
]

export default {
  modules: {
    objectStore,
    tab,
    tree
  },
  plugins,
  strict: true
}
