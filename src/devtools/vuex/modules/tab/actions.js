export default {
  fetchHost: (context, value) => {
    const id = context.getters.getID

    chrome.tabs.sendMessage(id, { type: 'GET_TAB_HOST' })
  }
}
