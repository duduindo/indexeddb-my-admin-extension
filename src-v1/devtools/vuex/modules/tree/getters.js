export default {
  getTree: state => state.tree,
  filterDatabases: state => host => {
    const { databases } = state
    const databasesFiltered = databases.filter(database => database.host === host)

    return databasesFiltered
  }
}
