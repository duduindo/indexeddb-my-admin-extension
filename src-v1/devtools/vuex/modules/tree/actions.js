export default {
  fetchTree(context, value) {
    const id = context.getters.getID

    chrome.tabs.sendMessage(id, { type: 'GET_DATABASE_TREE', payload: value })
  }
}
