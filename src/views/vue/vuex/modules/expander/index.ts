// import state from './state'
// import mutations from './mutations'
// import getters from './getters'
// import actions from './actions'


const state = {
  storages: [
    {
      name: 'IndexedDB',
      id: 'indexeddb',
      databases: [
        {
          name: "Database 1",
          version: 158272957993319,
        }, // 1
        {
          name: "Database 2",
          version: 158272957993319,
        }, // 2
        {
          name: "Database 3",
          version: 158272957993319,
        }, // 3
        {
          name: "Database 4",
          version: 158272957993319,
          tables: [
            {
              name: "Store 1",
              keyPath: 'key path name here',
              autoIncrement: true,
              indexes: [
                {
                  name: "Index 1",
                  keyPath: 'key path index 1',
                  unique: true,
                },
                {
                  name: "Index 2",
                  keyPath: 'key path index 2',
                  unique: true,
                },
                {
                  name: "Index 3",
                  keyPath: 'key path index 3',
                  unique: true,
                },
              ]
            }
          ]
        }, // 4
      ],
    } // indexeddb
  ],
}

const mutations = {
  setStorages(state: any, value: any) {
    state.storages = [...state.storages, ...value]
  }
}

const actions = {
  fetchExpanderStorages({ state, commit, rootState }: any) {
    commit('setDatabases', ['opa'])
  }
}

const getters = {
  getExpanderStorages(state: any) {
    return state.storages
  }
}


export default {
  state,
  // mutations,
  getters,
  actions
}
