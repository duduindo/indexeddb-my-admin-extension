export default {
  fetchObjectStoreContent(context, value) {
    const id = context.getters.getID

    chrome.tabs.sendMessage(id, { type: 'GET_DATABASE_OBJECTSTORE_CONTENT', payload: value })
  },
  fetchObjectStoreSearch(context, value) {
    const id = context.getters.getID

    chrome.tabs.sendMessage(id, { type: 'GET_DATABASE_OBJECTSTORE_SEARCH', payload: value })
  }
}
