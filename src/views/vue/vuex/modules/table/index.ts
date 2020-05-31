// import state from './state'
// import mutations from './mutations'
// import getters from './getters'
// import actions from './actions'

// content['#'] = keys.map((e: any, i: number) => i)
//     content[keyPath] = keys
//     content['value'] = values

const state = {
  content: {
    '#': [1,2,3],
    'key': ['a', 'b', 'c'],
    'value': ['a1', 'b1', 'c1'],
  }
}

const mutations = {
  // setStorages(state: any, value: any) {
  //   state.storages = [...state.storages, ...value]
  // }
}

const actions = {
  // fetchExpanderStorages({ state, commit, rootState }: any) {
  //   commit('setDatabases', ['opa'])
  // }
}

const getters = {
  getContentFromTable(state: any) {
    return state.content
  }
}


export default {
  state,
  // mutations,
  getters,
  actions
}
