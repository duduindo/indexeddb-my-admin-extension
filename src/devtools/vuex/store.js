import index from './modules/index/index'
import navigatorBar from './modules/navigatorBar/index'
import objectStore from './modules/objectStore/index'
import tab from './modules/tab/index'
import tree from './modules/tree/index'
import createOnMessagePlugin from './plugins/createOnMessagePlugin'


const plugins = [
  createOnMessagePlugin(chrome.runtime.onMessage)
]

export default {
  modules: {
    index,
    navigatorBar,
    objectStore,
    tab,
    tree
  },
  plugins,
  strict: true
}
