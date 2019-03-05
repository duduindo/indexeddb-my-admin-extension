export default {
  fetchTree(context, value) {
    context.commit('FETCH_INDEXEDDB_EXTENSION', value)
  },

  setTree(context, value) {
    context.commit('SET_TREE', value)
  }
}
