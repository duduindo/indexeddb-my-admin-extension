export default {
  SET_TREE: (state, value) => {
    const { name, version, stores } = value || {}

    if (name && version && stores) {
      state.tree.push(value)
    }
  }
}
