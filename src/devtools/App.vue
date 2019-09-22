<template>
  <div class="l-container platform-linux" id="app">
    <aside class="l-aside">
      <Expander />
    </aside>

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
  @import './sass/index'
</style>

<style lang="stylus">
  @import './stylus/index'
</style>
