<template>
  <form>
    <label for="filter-rows"></label>
    <input type="text" id="filter-rows" placeholder="Search this store" @keyup="this.handleKeyup">
  </form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'pagination-store',
    data() {
      return {
        timeout: null
      }
    },
    methods: {
      ...mapActions({
        search: 'searchStoreValues'
      }),
      handleKeyup(event) {
        if (this.timeout) {
          clearTimeout(this.timeout)
          this.timeout = null
        }

        this.timeout = setTimeout(this.search, 80, event.target.value)
      }
    }
  }
</script>
