<template>
  <div>
    <h2>Insert</h2>

    <form @submit.prevent>
      <p>Status: <i>{{ status }}</i></p>

      <table class="table table-extension table-borderless">
        <thead>
          <tr>
            <th><label for="cursorTextarea">Value</label></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div class="form-group">
                <textarea v-model="cursor" :rows="rows" id="cursorTextarea" class="form-control" autofocus="true" autocorrect="off" spellcheck="false"></textarea>
              </div>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td>
              <button class="btn btn-sm btn-primary btn-extension" @click="handleClick"><b>Go</b></button>
            </td>
          </tr>
        </tfoot>
      </table>

      <div>
        <button class="btn btn-sm btn-secondary btn-extension">Preview script</button>
        <button class="btn btn-sm btn-secondary btn-extension">Reset</button>
      </div>
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
        status: 'getObjectStoreInsertedStatus'
      })
    },
    methods: {
      ...mapActions({
        fetch: 'fetchObjectStoreInsert',
        setStatus: 'setObjectStoreStatusInserted'
      }),
      handleClick() {
        const { database, store, version } = this.$route.params

        try {
          const cursor = JSON.parse(this.cursor)

          this.fetch({
            name: database,
            version,
            store,
            value: cursor
          })

          this.setStatus('loading...')
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
      this.setStatus('')
    }
  }
</script>
