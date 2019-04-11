import Commands from '@/commands'

const command = new Commands()

chrome.runtime.onMessage.addListener(function(action, sender, sendResponse) {
  command.exec(action)
    .then(data => chrome.runtime.sendMessage(data))
    .catch(() => console.error('Erro content'))
})
