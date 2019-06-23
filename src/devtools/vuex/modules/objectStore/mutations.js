export default {
  SET_OBJECTSTORE_CONTENT: (state, { data }) => {
    state.content = data
  },
  SET_OBJECTSTORE_INSERTED_STATUS: (state, { data }) => {
    state.statusInserted = data
  }
}
