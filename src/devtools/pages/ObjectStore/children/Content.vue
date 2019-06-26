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

    <Pagination />
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
  import Pagination from '../components/Pagination'
  import Table from '../components/Table'

  export default {
    name: 'Content',
    components: { Pagination, Table },
    computed: {
      ...mapGetters({
        content: 'getObjectStoreContent',
        statusDeleted: 'getObjectStoreDeletedStatus'
      })
    },
    methods: {
      ...mapActions({
        fetch: 'fetchObjectStoreContent',
        fetchDelete: 'fetchObjectStoreDelete',
        setStatusDeleted: 'setObjectStoreStatusDeleted'
      }),
      handleDelete(key) {
        const { database: name, version, store } = this.$route.params

        this.fetchDelete({
          name,
          version,
          store,
          key
        })

        this.setStatusDeleted('loading')
      },
      handleMount() {
        const { database: name, version, store } = this.$route.params

        this.fetch({
          name,
          version,
          store
        })
      }
    },
    watch: {
      statusDeleted(value) {
        if (value === 'success') {
          this.handleMount()
        }
      }
    },
    mounted() {
      this.handleMount()
    }
  }
</script>
