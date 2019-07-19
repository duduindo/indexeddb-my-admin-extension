export default {
  SET_BREADCRUMB_DATABASE: (state, { data }) => {
    state.database = data
  },
  SET_BREADCRUMB_STORE: (state, { data }) => {
    state.store = data
  },
  SET_BREADCRUMB_INDEX: (state, { data }) => {
    state.index = data
  }
}
