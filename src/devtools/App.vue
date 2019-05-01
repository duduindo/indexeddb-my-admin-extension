<template>
  <div class="l-container theme-pmahomme" id="app">
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
  @import '@/devtools/sass/index'

  // body
  //   background-color: silver

  // table
  //   border-collapse: collapse
  //   width: 100%

  // td, th
  //   border: 1px solid #dddddd
  //   text-align: left
  //   padding: 8px

  // tr:nth-child(even)
  //   background-color: #dddddd
</style>
