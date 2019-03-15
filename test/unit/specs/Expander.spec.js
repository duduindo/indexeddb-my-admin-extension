/**
 * Origin: https://github.com/eddyerburgh/vue-test-utils-vuex-example/blob/master/test/unit/specs/MyComponent.spec.js
 *         https://github.com/vuejs/vue-test-utils-jest-example/blob/master/test/List.spec.js
 */
import Vuex from 'vuex'
import Router from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import treeModule from '@/vuex/modules/tree'
import Expander from '@/components/Expander'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Router)


describe('Expander', () => {
  let state
  let store
  let emptyStore

  beforeEach(() => {
    state = {
      trees: [
        {
          host: 'localhost',
          databases: [
            {
              name: 'database-name',
              version: 1
            }
          ]
        }
      ]
    }

    store = new Vuex.Store({
      modules: {
        treeModule: {
          state,
          getters: treeModule.getters
        }
      }
    })
  })

  test('Should redirection link like database name and version', () => {
    const wrapper = shallowMount(Expander, { store, localVue })
    const link = wrapper.find('ul [tag="a"]')

    expect(link.attributes()).toMatchObject({to: '/database/database-name/1/'})
  })
})
