export default {
  fetchTree(context, value) {
    context.commit('FETCH_TREE', value)
  },

  setTree(context, value) {
    context.commit('SET_TREE', value)
  }
}