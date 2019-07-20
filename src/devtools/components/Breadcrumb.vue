<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link :to="'/'" >Server: {{ host }}</router-link></li>
      <li class="breadcrumb-item" v-if="database"><router-link :to="'/'" >Database: {{ database }}</router-link></li>
      <li class="breadcrumb-item" v-if="store"><router-link :to="`/object-store/${database}/${version}/${store}/`" >Store: {{ store }}</router-link></li>
      <li class="breadcrumb-item" v-if="index"><router-link :to="`/index/${database}/${version}/${store}/${index}/`" >Index: {{ index }}</router-link></li>
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
      ...mapActions({}),
      setBreadcrumbFromParams(params = {}) {
        const { database, version, store, index } = params

        this.database = database
        this.version = version
        this.store = store
        this.index = index
      }
    },
    watch: {
      '$route'(to) {
        this.setBreadcrumbFromParams(to.params)
      }
    },
    created() {
      this.setBreadcrumbFromParams(this.$route.params)
    }
  }
</script>
