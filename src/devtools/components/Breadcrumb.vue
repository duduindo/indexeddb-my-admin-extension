<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link :to="'/'" >Server: {{ host }}</router-link></li>
      <li class="breadcrumb-item" v-if="database"><a href="#">Database: TCGA_DB</a></li>
      <li class="breadcrumb-item" v-if="store"><a href="#">Store: ACC_Clinical</a></li>
      <li class="breadcrumb-item" v-if="index"><a href="#">Index: Status</a></li>
    </ol>
  </nav>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Breadcrumb',
    data() {
      return {
        database: null,
        version: null,
        store: null,
        index: null
      }
    },
    computed: {
      ...mapGetters({
        host: 'getHost'
      })
    },
    methods: {
      ...mapActions({})
    },
    watch: {
      '$route'(to) {
        const {
          database = '',
          version = '',
          store = '',
          index = ''
        } = to.params

        this.database = database
        this.version = version
        this.store = store
        this.index = index
      }
    }
  }
</script>
