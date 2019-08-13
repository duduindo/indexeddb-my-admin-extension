<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h1>{{title}}</h1>
        </div>
      </div>
    </div>
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
    mounted() {
      const { database } = this.$route.params

      this.title = database
    }
  }
</script>
