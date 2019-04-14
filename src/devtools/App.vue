<template>
  <div class="l-container" id="app">
    <aside class="l-aside">
      <router-link :to="'/'" >Go to index</router-link>
      <Expander />
    </aside>

    <header class="l-masthead">
      <router-view name="header" />
    </header>

    <main class="l-main">
      <router-view />
    </main>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Expander from '@/devtools/components/Expander'

  export default {
    name: 'App',
    components: { Expander },
    methods: {
      ...mapActions({
        fetch: 'fetchHost'
      })
    },
    mounted() {
      this.fetch()
    }
  }
</script>

<style lang="sass">
  body
    background-color: silver

  table
    border-collapse: collapse
    width: 100%

  td, th
    border: 1px solid #dddddd
    text-align: left
    padding: 8px

  tr:nth-child(even)
    background-color: #dddddd

  .l-container
    display: grid
    grid-template-columns: 2fr 8fr
    grid-template-rows: auto 10fr
    grid-gap: 5px

  .l-masthead
    grid-column: 2
    grid-row: auto

  .l-aside
    grid-column: 1
    grid-row: 1/3

  .l-main
    grid-column: 2
    grid-row: 2
</style>
