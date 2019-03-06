export default {
  getTrees: state => {
    const { trees } = state
    const { host } = window.location

    return trees.filter(database => database.host === host)
  }
}
