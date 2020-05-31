<template>
  <div class="l-container">
    <aside class="l-aside">
      <Expander class="c-expander" />
    </aside>

    <main class="l-main">
      <router-view />
    </main>
  </div>
</template>


<script>
  import '@/views/sass/index.sass'
  import Expander from './components/Expander'


  export default {
    name: 'App',
    components: {
      Expander,
    },
    computed: {
      count() {
        return this.$store.getters.getCount
      }
    },
    methods: {
      increment() {
        this.$store.dispatch('incrementCount')
      }
    },
  }
</script>
