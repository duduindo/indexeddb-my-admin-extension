<template>
  <form>
    <label for="filter-rows"></label>
    <input type="text" id="filter-rows" placeholder="Search this store" v-model="terms">
  </form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'pagination-store',
    data() {
      return {
        timeout: null,
        terms: ''
      }
    },
    methods: {
      ...mapActions({
        search: 'searchStoreValues'
      })
    },
    watch: {
      terms(value) {
        if (this.timeout) {
          clearTimeout(this.timeout)
          this.timeout = null
        }

        this.timeout = setTimeout(this.search, 80, value)
      }
    }
  }
</script>
