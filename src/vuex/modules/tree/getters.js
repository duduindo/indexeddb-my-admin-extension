export default {
  getTrees: state => (domain = '') => {
    const { trees } = state

    return trees.filter(database => database.domain === domain)
  }
}
