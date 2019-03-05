<template>
  <div id="app">
    <img src="./assets/logo.png" class="test" :class="opa">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      opa: 'test2'
    }
  }
}
</script>

<style lang="sass">
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
</style>
