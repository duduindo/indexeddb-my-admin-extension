export default {
  setNavigatorBarTabs: (context, value) => {
    context.commit('SET_NAVIGATOR_BAR_TABS', { data: value })
  },
  setNavigatorBarActive: (context, value) => {
    context.commit('SET_NAVIGATOR_BAR_ACTIVE', { data: value })
  }
}
