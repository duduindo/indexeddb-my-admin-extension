<template>
  <form @submit.prevent>
    <fieldset>
      <label for="filter-rows"></label>
      <input type="text" id="filter-rows" placeholder="Search this store" v-model="terms">
    </fieldset>
  </form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Pagination',
    data() {
      return {
        timeout: null,
        terms: ''
      }
    },
    methods: {
      ...mapActions({
        fetch: 'fetchObjectStoreSearch'
      })
    },
    watch: {
      terms(value) {
        const { database: name, version, store } = this.$route.params

        if (this.timeout) {
          clearTimeout(this.timeout)
          this.timeout = null
        }

        this.timeout = setTimeout(this.fetch, 200, {
          name,
          version,
          store,
          terms: value
        })
      }
    }
  }
</script>
