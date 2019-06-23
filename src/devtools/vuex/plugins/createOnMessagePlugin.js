/*
 * https://vuex.vuejs.org/guide/plugins.html
 */

function createOnMessagePlugin(onMessage) {
  return store => {
    onMessage.addListener((request, tab) => {
      const { data, type } = request
      const idExtension = store.getters.getID
      const idTab = tab.tab.id

      console.warn(data)

      if (idExtension !== idTab) {
        return
      }

      switch (type) {
        case 'GET_TAB_HOST':
          store.commit('SET_HOST', data)
          break

        case 'GET_DATABASE_TREE':
          store.commit('SET_TREE', data)
          break

        // Object Store
        case 'INSERT_DATABASE_OBJECTSTORE_CONTENT':
          store.commit('SET_OBJECTSTORE_INSERTED_STATUS', data)
          break

        case 'GET_DATABASE_OBJECTSTORE_CONTENT':
          store.commit('SET_OBJECTSTORE_CONTENT', data)
          break

        case 'GET_DATABASE_OBJECTSTORE_SEARCH':
          store.commit('SET_OBJECTSTORE_CONTENT', data)
          break
      }
    })

    store.subscribe(mutation => {
      // console.log('Plugin. Mutation type: ', mutation.type)
    })
  }
}

export default createOnMessagePlugin
