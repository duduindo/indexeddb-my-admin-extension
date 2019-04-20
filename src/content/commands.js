import IndexedDBAdmin from '@/content/indexedDBAdmin'
import Tab from '@/content/tab'


class Commands {
  constructor(props) {
    this.action = {}
  }

  async handleIndexedDB() {
    const { type, payload } = this.action
    const indexedDBAdmin = new IndexedDBAdmin(payload.name, payload.version)
    let request = null

    switch (type) {
      case 'GET_DATABASE_OBJECTSTORE_CONTENT':
        request = indexedDBAdmin.getAllFromObjectStore(payload.store)
        break

      case 'GET_DATABASE_OBJECTSTORE_SEARCH':
        request = indexedDBAdmin.getAllFromObjectStoreSearch(payload.store, payload.terms)
        break

      case 'GET_DATABASE_TREE':
        request = indexedDBAdmin.getDatabaseTree()
        break

      case 'ADD_DATABASE_STORE':
        request = indexedDBAdmin.addObjectStore(payload.store, payload.value)
        break

      case 'UPDATE_DATABASE_STORE':
        request = indexedDBAdmin.updateObjectStore(payload.store, payload.oldValue, payload.newValue)
        break

      default:
        throw new Error('Error default command')
    }

    return request
  }

  async handleTab() {
    const { type } = this.action
    const tab = new Tab()
    let request = null

    switch (type) {
      case 'GET_TAB_HOST':
        request = tab.getHost()
        break

      default:
        throw new Error('Error default command')
    }

    return request
  }

  reducer() {
    const { type } = this.action
    let request = null

    if (type.match('_DATABASE_')) {
      request = this.handleIndexedDB()
    }

    if (type.match('_TAB_')) {
      request = this.handleTab()
    }

    return request
  }

  async exec(action) {
    this.action = action

    if (action['type']) {
      try {
        return {
          data: await this.reducer(action),
          origin: window.location.host,
          type: action.type
        }
      } catch (err) {
        return {
          data: null,
          origin: window.location.host,
          type: 'ERROR'
        }
      }
    }
  }
}


export default Commands
