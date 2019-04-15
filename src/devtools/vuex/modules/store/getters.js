export default {
  getStoreFull: state => state.store,
  getStore: state => state.storeFiltered,
  getStoreAddedStatus: state => state.storeObjectAddedStatus,
  getStoreUpdatedStatus: state => state.storeObjectUpdatedStatus
}
