<template>
  <div>
    <h1>Edit</h1>
    <h3>Status: <i>{{ status }}</i></h3>
    <form>
      <button type="button" @click="handleUpdate">Update</button>
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
        oldCursor: '{}',
        rows: 2
      }
    },
    computed: {
      ...mapGetters({
        status: 'getStoreUpdatedStatus'
      })
    },
    methods: {
      ...mapActions({
        fetch: 'fetchUpdateStore',
        setStatus: 'setUpdateStatus'
      }),
      handleUpdate() {
        const { database, store, version } = this.$route.params

        try {
          const cursor = JSON.parse(this.cursor)
          const oldCursor = JSON.parse(this.oldCursor)

          this.fetch({
            name: database,
            version,
            store,
            oldValue: oldCursor,
            newValue: cursor
          })
        } catch (err) {
          this.setStatus(err)
        }
      }
    },
    mounted() {
      const { cursor = {} } = this.$route.query
      const cursorString = JSON.stringify(cursor)
      const cursorFormatted = JsonStringFormatter.format(cursorString, '  ')

      this.cursor = cursorFormatted
      this.oldCursor = cursorString
      this.rows = cursorFormatted.match(/\n/g) ? (cursorFormatted.match(/\n/g).length + 1) : 2
    },
    destroyed() {
      this.setStatus('Waiting to update')
    }
  }
</script>

<style lang="sass" scoped>
  textarea
    width: 100%
</style>
