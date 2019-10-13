import Vue from 'vue'
import VueJsonPretty from 'vue-json-pretty'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as faIcons from '../common/ts/components/Icons'

library.add(faIcons)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-json-pretty', VueJsonPretty)