<template>
  <div class="pagination pagination-extension">
    <form class="form-inline" @submit.prevent>
      <div class="form-group">
        <label class="form-check-label" for="show-all">
          Show all
        </label>
        <input class="form-check-input" type="checkbox" value="" id="show-all">
      </div>

      <div class="form-group">
        <label for="number-of-rows">Number of rows:</label>
        <select class="form-control form-control-xs" id="number-of-rows">
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="250">250</option>
          <option value="500">500</option>
        </select>
      </div>

      <div class="form-group">
        <label for="filter-rows">Filter rows:</label>
        <input v-model="terms" type="search" class="form-control form-control-xs" id="filter-rows" placeholder="Search this store">
      </div>
    </form>
  </div>
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
