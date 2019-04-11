/*
 * https://vuex.vuejs.org/guide/plugins.html
 */

function createOnMessagePlugin(onMessage) {
  return store => {
    onMessage.addListener((request, tab) => {
      const { data, type } = request
      const idExtension = store.getters.getID
      const idTab = tab.tab.id

      if (idExtension !== idTab) {
        return
      }

      switch (type) {
        case 'GET_TAB_HOST':
          store.commit('SET_HOST', data)
          break

        case 'GET_DATABASE_STORE':
          store.commit('SET_STORE', data)
          break

        case 'UPDATE_DATABASE_STORE':
          store.commit('SET_STORE_UPDATED_STATUS', data)
          break

        case 'GET_DATABASE_TREE':
          store.commit('SET_TREE', data)
          break
      }
    })

    store.subscribe(mutation => {
      console.log('Plugin. Mutation type: ', mutation.type)
    })
  }
}

export default createOnMessagePlugin
