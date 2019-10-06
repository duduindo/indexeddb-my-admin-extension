export default {
  SET_NAVIGATOR_BAR_TABS: (state, { data = [] }) => {
    const tabDefault = {
      name: 'No name',
      href: '/',
      isActive: false
    }

    state.tabs = data.map((tab, index) => ({ ...tabDefault, ...tab, id: index }))
  },
  SET_NAVIGATOR_BAR_ACTIVE: (state, { data = 0 }) => {
    const id = data
    const tabs = state.tabs.concat()
    const hasTab = tabs.some(tab => tab.id === id)

    if (hasTab) {
      state.tabs = tabs.map(tab => {
        if (tab.id === id) {
          tab.isActive = true
        } else {
          tab.isActive = false
        }

        return tab
      })
    }
  }
}
