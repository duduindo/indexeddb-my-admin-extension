export default {
  setBreadcrumbDatabase: (context, value) => {
    context.commit('SET_BREADCRUMB_DATABASE', { data: value })
  },
  setBreadcrumbStore: (context, value) => {
    context.commit('SET_BREADCRUMB_STORE', { data: value })
  },
  setBreadcrumbIndex: (context, value) => {
    context.commit('SET_BREADCRUMB_INDEX', { data: value })
  }
}
