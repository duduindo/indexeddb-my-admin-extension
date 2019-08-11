<template>
  <div class="l-container theme-pmahomme" id="app">
    <aside class="l-aside">
      <!-- <router-link :to="'/'" >Go to index</router-link>
      <Expander /> -->
      aside
    </aside>

    <header class="l-masthead">
      <!-- <router-view name="header" /> -->
      header
    </header>

    <main class="l-main">
      <!-- <Breadcrumb />
      <NavigatorBar />
      <router-view /> -->
      main
    </main>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  // import Breadcrumb from '@/devtools/components/Breadcrumb'
  // import Expander from '@/devtools/components/Expander'
  // import NavigatorBar from '@/devtools/components/NavigatorBar'

  export default {
    name: 'App',
    // components: { Breadcrumb, Expander, NavigatorBar },
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

<style lang="stylus">
  @import './stylus/index'
</style>
