import Vue from 'vue'
import Vuetify, {
  // Button
  VBtn,

  // Card
  VCard,

  // Icon
  VIcon,

  // List
  VList,
  VListGroup,
  VListItem,
  VListItemIcon,
  VListItemContent,
  VListItemTitle,

  // Select
  VSelect,

} from 'vuetify/lib'


Vue.use(Vuetify, {
  components: {
    VBtn,
    VList,
    VListItem,
  },
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
})

const opts = {}

export default new Vuetify(opts)
