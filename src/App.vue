<template>
  <div class="l-container" id="app">
    <aside class="l-aside">
      <h3>logo</h3>
      <!-- <Expander /> -->
    </aside>

    <header class="l-masthead">
      <!-- <Route component={Header} />
      <Route path="/content" component={Filter} />
      <Route path="/content" component={StatusResults} /> -->
    </header>

    <main class="l-main">
      <!-- <Route exact path="/databases" component={Databases} />
      <Route exact path="/stores" component={Stores} />
      <Route exact path="/store-values" component={StoreValues} />
      <Route path="/content" component={Content} /> -->
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
  @import 'src/assets/sass/layout/index'
  @import 'node_modules/bootstrap/scss/bootstrap'
  @import 'node_modules/bootstrap-vue/src/index.scss'
</style>
