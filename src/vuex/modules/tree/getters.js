export default {
  getTrees: state => {
    const { trees } = state
    const { host } = window.location

    return trees.filter(database => database.host === host)
  },

  getDatabases: state => {
    const { trees } = state
    const { host } = window.location
    const context = trees.filter(tree => tree.host === host)
    const hasDatabases = context.some(c => c.databases)

    return hasDatabases ? context[0].databases : []
  }
}
