<template>
  <div>
    <h1>{{title}}</h1>
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'database-content',
    data() {
      return {
        title: 'saaas'
      }
    },
    watch: {
      // '$route'(to) {
      //   console.warn(to)
      // }
    },
    mounted() {
      const { database } = this.$route.params

      this.title = database
    }
  }
</script>
