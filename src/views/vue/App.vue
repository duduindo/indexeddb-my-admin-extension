<template>
  <v-app>
    <v-btn color="primary" v-on:click="increment">Primary</v-btn>
    <div>
      {{ count }}
    </div>

    <router-view />
  </v-app>
</template>


<script>
  import '@/views/sass/index.sass'


  export default {
    name: 'App',
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
