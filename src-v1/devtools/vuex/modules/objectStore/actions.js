export default {
  fetchObjectStoreContent(context, value) {
    const id = context.getters.getID

    chrome.tabs.sendMessage(id, { type: 'GET_DATABASE_OBJECTSTORE_CONTENT', payload: value })
  },
  fetchObjectStoreSearch(context, value) {
    const id = context.getters.getID

    chrome.tabs.sendMessage(id, { type: 'GET_DATABASE_OBJECTSTORE_SEARCH', payload: value })
  },
  fetchObjectStoreInsert(context, value) {
    const id = context.getters.getID

    chrome.tabs.sendMessage(id, { type: 'INSERT_DATABASE_OBJECTSTORE_CONTENT', payload: value })
  },
  fetchObjectStoreDelete(context, value) {
    const id = context.getters.getID

    chrome.tabs.sendMessage(id, { type: 'DELETE_DATABASE_OBJECTSTORE_CONTENT', payload: value })
  },
  setObjectStoreStatusDeleted(context, value) {
    context.commit('SET_OBJECTSTORE_DELETED_STATUS', { data: value })
  },
  setObjectStoreStatusInserted(context, value) {
    context.commit('SET_OBJECTSTORE_INSERTED_STATUS', { data: value })
  }
}
