import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as faIcons from '@/devtools/common/icons'

// CSS
import '@/devtools/stylus/index.styl'
import '@/devtools/sass/index.sass'

// Components
import Alert from '@/devtools/components/Alert.vue'

// Config
library.add(faIcons)
Vue.component('font-awesome-icon', FontAwesomeIcon)


storiesOf('Alert', module)
  .add('Default', () => ({
    components: { Alert },
    template: '<Alert text="Lorem Ipsum!!" />'
  }))
  .add('Colors', () => ({
    components: { Alert },
    template: `
      <div>
        <Alert text="type='primary'" type="primary" />
        <Alert text="type='success'" type="success" />
        <Alert text="type='error'" type="error" />
        <Alert text="type='warning'" type="warning" />
        <Alert text="type='secondary' (Default)" type="secondary" />
       </div>
      `
  }))
