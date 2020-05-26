/* istanbul ignore file */
import createOnMessagePlugin from './plugins/createOnMessagePlugin'
import example from './modules/example'
import expander from './modules/expander'


const plugins = [
  createOnMessagePlugin({}) // e.g (chrome.runtime.onMessage)
]

export default {
  modules: {
    example,
    expander
  },
  strict: true,
  plugins: plugins
};
