
const chromeFake = {
  runtime: {
    onMessage: {
      addListener(callback) {
        setTimeout(callback, 1000, 'Message received')
      }
    }
  },

  tabs: {
    query(props, callback) {
      const tabs = [{ id: 1 }]

      setTimeout(callback, 300, tabs)
    },

    sendMessage(message) {
      console.warn('Sending: ', message)
    }
  },

  devtools: {
    panels: {
      create(title, any, htmlFile, callback) {
        setTimeout(callback, 300)
      }
    }
  }
}


/**
 * Pattern: Singleton
 */
class BrowserExtension {
  _tabId = null;

  constructor() {
    if (typeof BrowserExtension.instance === 'object') {
      return BrowserExtension.instance
    }

    BrowserExtension.instance = this
    return this
  }

  onLoad(callback) {
    chromeFake.devtools.panels.create('IndexedDB My Admin', '', 'devtools.html', () => {
      chromeFake.tabs.query({active: true, currentWindow: true}, tabs => {
        if (tabs.length !== null) {
          this._tabId = tabs[0].id
        } else {
          console.error('Error initialization')
        }

        callback(tabs)
      })
    })
  }

  onMessage(callback) {
    if (this._tabId !== null) {
      chromeFake.runtime.onMessage.addListener(request => callback(request))
    } else {
      callback(null)
    }
  }

  sendMessage(message) {
    if (this._tabId !== null) {
      chromeFake.tabs.sendMessage(this._tabId, message)
    }
  }
}

export default BrowserExtension
