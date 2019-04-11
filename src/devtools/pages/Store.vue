<template>
  <table-store
    :database="this.$route.params.database"
    :version="this.$route.params.version"
    :store="this.$route.params.store"
    :objectStore="this.objectStore"
  />
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import TableStore from '@/components/TableStore'

  export default {
    components: { TableStore },
    computed: {
      ...mapGetters({
        objectStore: 'getStore'
      })
    },
    methods: {
      ...mapActions({
        fetch: 'fetchStore'
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
