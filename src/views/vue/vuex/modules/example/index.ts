// import state from './state'
// import mutations from './mutations'
// import getters from './getters'
// import actions from './actions'


const state = {
  count: 0,
}

const mutations = {
  setCount(state: any, value: any) {
    state.count = value
  }
}

const actions = {
  incrementCount({ state, commit, rootState }: any) {
    commit('setCount', state.count + 1)
  }
}

const getters = {
  getCount(state: any) {
    return state.count
  }
}


export default {
  state,
  mutations,
  getters,
  actions
}
