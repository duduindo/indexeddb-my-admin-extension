/**
 * Origin: https://github.com/eddyerburgh/vue-test-utils-vuex-example/blob/master/test/unit/specs/MyComponent.spec.js
 *         https://github.com/vuejs/vue-test-utils-jest-example/blob/master/test/List.spec.js
 */

import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import myModule from '@/vuex/modules/tree'
import Expander from '../'

const localVue = createLocalVue()

localVue.use(Vuex)


describe('Getters', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      trees: [
        {
          host: 'localhost',
          databases: []
        }
      ]
    }

    actions = {}

    store = new Vuex.Store({
      modules: {
        myModule: {
          state,
          actions,
          getters: myModule.getters
        }
      }
    })
  })

  test('####', () => {
    const wrapper = shallowMount(Expander, { store, localVue })
    const ul = wrapper.find('ul')

    console.log(ul)
  })
})
