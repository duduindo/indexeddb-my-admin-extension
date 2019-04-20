<template>
  <div>
    <Pagination />
    <Table
      :database="$route.params.database"
      :version="$route.params.version"
      :store="$route.params.store"
      :content="content"
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
        content: 'getObjectStoreContent'
      })
    },
    methods: {
      ...mapActions({
        fetch: 'fetchObjectStoreContent'
      })
    },
    mounted() {
      const { database: name, version, store } = this.$route.params

      this.fetch({
        name,
        version,
        store
      })
    }
  }
</script>
