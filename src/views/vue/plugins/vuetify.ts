import Vue from 'vue'
import Vuetify, {
  VBtn
} from 'vuetify/lib'


Vue.use(Vuetify, {
  components: {
    VBtn
  },
})

const opts = {}

export default new Vuetify(opts)
