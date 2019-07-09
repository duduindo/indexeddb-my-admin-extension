<template>
  <div>
    <div class="alert alert-success alert-extension" role="alert">
      <div class="alert-head">
        Showing rows 0 - 7 (8 total, Query took 0.0005 seconds.)
      </div>

      <div class="alert-body">
        SELECT * FROM `Categories`
      </div>

      <div class="alert-foot text-right">
        <button class="btn btn-sm btn-secondary btn-extension">Copy code</button>
      </div>
    </div>

    <Table
      :database="$route.params.database"
      :version="$route.params.version"
      :store="$route.params.store"
      :content="content"
      :handleDelete="handleDelete"
    />
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Table from '../components/Table'

  export default {
    name: 'Content',
    components: { Table },
    computed: {
      ...mapGetters({
        content: 'getIndexContent',
        statusDeleted: 'getObjectStoreDeletedStatus'
      })
    },
    methods: {
      ...mapActions({
        fetch: 'fetchIndexContent',
        fetchDelete: 'fetchObjectStoreDelete',
        setStatusDeleted: 'setObjectStoreStatusDeleted'
      }),
      handleDelete(key) {
        const { database: name, version, store } = this.$route.params
        const isConfirm = confirm('Do you really want to delete it?')

        if (isConfirm) {
          this.fetchDelete({
            name,
            version,
            store,
            key
          })

          this.setStatusDeleted('loading')
        }
      },
      handleMount() {
        const { database: name, version, store, index } = this.$route.params

        this.fetch({
          name,
          version,
          store,
          index
        })
      }
    },
    watch: {
      statusDeleted(value) {
        if (value === 'success') {
          this.handleMount()
        }
      },
      content(v) {
        console.log(v)
      }
    },
    mounted() {
      this.handleMount()
    }
  }
</script>
