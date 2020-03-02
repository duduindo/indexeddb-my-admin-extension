<template>
  <v-app>
    <Expander />
  </v-app>
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
