import { storiesOf } from '@storybook/vue'


// // Fa
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faRedo, faCaretLeft, faCaretRight, faBroom, faTrashAlt, faCopy, faClone, faEdit, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
// import { faJs } from '@fortawesome/free-brands-svg-icons/faJs'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// CSS
// import '!style-loader!css-loader!stylus-loader!../src/devtools/stylus/index.styl';
// import '!style-loader!css-loader!sass-loader!../src/devtools/sass/index.sass';

// Vue config
// library.add(faRedo, faCaretLeft, faCaretRight, faBroom, faTrashAlt, faCopy, faClone, faEdit, faPlus, faJs, faTimesCircle)

// Vue.component('font-awesome-icon', FontAwesomeIcon)


// Vue
import Alert from '@/devtools/components/Alert'

storiesOf('Alert', module)
  .add('as a component', () => ({
    components: { Alert },
    template: '<b><Alert text="Finalmente!!" title="Title here!" /></b>'
  }))
