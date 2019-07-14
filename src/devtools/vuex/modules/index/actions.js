export default {
  fetchIndexContent(context, value) {
    const id = context.getters.getID

    chrome.tabs.sendMessage(id, { type: 'GET_DATABASE_INDEX_CONTENT', payload: value })
  }
}
