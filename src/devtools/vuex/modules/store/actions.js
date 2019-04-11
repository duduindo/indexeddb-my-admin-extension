function handleSearchStore(store = {}, terms = '') {
  let keys = store.keys
  let values = store.values.map(value => JSON.stringify(value))
  const valuesIndex = values.filterIndex(value => value.match(terms))

  values = values.filter(value => value.match(terms))
  values = values.map(value => JSON.parse(value))
  keys = keys.filter((key, index) => valuesIndex.some(value => value === index))

  return {
    ...store,
    values,
    keys
  }
}


export default {
  fetchStore(context, value) {
    const id = context.getters.getID

    chrome.tabs.sendMessage(id, { type: 'GET_DATABASE_STORE', payload: value })
  },
  fetchUpdateStore(context, value) {
    const id = context.getters.getID

    chrome.tabs.sendMessage(id, { type: 'UPDATE_DATABASE_STORE', payload: value })
  },
  searchStoreValues(context, value) {
    let store = context.getters.getStoreFull

    if (!store.values || !store.keys) {
      return
    }

    store = handleSearchStore(store, value)

    context.commit('SET_STORE_FILTERED', store)
  }
}
