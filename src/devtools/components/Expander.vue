<template>
  <div>
    <list :tree="tree"/>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import List from '@/components/List.vue'

  export default {
    name: 'expander',
    components: {
      List
    },
    data() {
      return {
        databasesFiltered: []
      }
    },
    computed: {
      ...mapGetters({
        filter: 'filterDatabases',
        tree: 'getTree',
        host: 'getHost'
      })
    },
    methods: {
      ...mapActions({
        fetch: 'fetchTree',
        fetchStore: 'fetchStore'
      })
    },
    watch: {
      host(value, oldValue) {
        if (value !== oldValue) {
          this.databasesFiltered = this.filter(value)
        }
      },
      databasesFiltered(value) {
        const databases = value

        databases.forEach(database => {
          this.fetch({
            name: database.name,
            version: database.version
          })
        })
      },
      '$route'(to) {
        const storeMatched = to.fullPath.match(/^\/store\/(?<name>.*)\/(?<version>\d{1,})\/(?<store>\w{1,})/)

        if (storeMatched) {
          this.fetchStore({ ...storeMatched.groups })
        }
      }
    }
  }
</script>
