export default {
  SET_TREE: (state, { data }) => {
    const { name, version, stores } = data || {}

    if (name && version && stores) {
      state.tree.push(data)
    }
  }
}
