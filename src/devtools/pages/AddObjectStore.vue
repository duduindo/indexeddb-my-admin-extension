<template>
  <div>
    <h1>Add</h1>
    <h3>Status: <i>{{ status }}</i></h3>
    <form>
      <button type="button" @click="handleAdd">Go</button>
      <hr>
      <textarea v-model="cursor" :rows="rows" autofocus="true" autocorrect="off" spellcheck="false"></textarea>
    </form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import JsonStringFormatter from 'json-string-formatter'

  export default {
    data() {
      return {
        cursor: '{}',
        rows: 2
      }
    },
    computed: {
      ...mapGetters({
        status: 'getStoreAddedStatus'
      })
    },
    methods: {
      ...mapActions({
        fetch: 'fetchAddStore',
        setStatus: 'setAddStatus'
      }),
      handleAdd() {
        const { database, store, version } = this.$route.params

        try {
          const cursor = JSON.parse(this.cursor)

          this.fetch({
            name: database,
            version,
            store,
            value: cursor
          })
        } catch (err) {
          this.setStatus(err.message)
        }
      }
    },
    mounted() {
      const { cursor = {} } = this.$route.query
      const cursorString = JSON.stringify(cursor)
      const cursorFormatted = JsonStringFormatter.format(cursorString, '  ')

      this.cursor = cursorFormatted
      this.rows = cursorFormatted.match(/\n/g) ? (cursorFormatted.match(/\n/g).length + 1) : 2
    },
    destroyed() {
      this.setStatus('Waiting to add')
    }
  }
</script>

<style lang="sass" scoped>
  textarea
    width: 100%
</style>
