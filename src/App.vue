<!-- <template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template> -->


<template>
  <div id="app" class="l-container">
    <aside class="l-aside">
      <h3>logo</h3>
      <Expander />
    </aside>

    <header class="l-masthead">
      <!-- <Route component={Header} />
      <Route path="/content" component={Filter} />
      <Route path="/content" component={StatusResults} /> -->
    </header>

    <main class="l-main">
      <!-- <Route exact path="/databases" component={Databases} />
      <Route exact path="/store-list/:database/:version/:store" component={StoreList} />
      <Route path="/content" component={Content} /> -->
      <router-view/>
    </main>
  </div>
</template>

<script>
  import Expander from '@/components/Expander.vue'

  export default {
    name: 'App',
    components: {
      Expander
    }
  }
</script>

<style lang="sass">
@import '../node_modules/bootstrap/scss/bootstrap.scss'

.l-container
  display: grid
  grid-template-columns: 2fr 8fr
  grid-template-rows: auto 10fr
  grid-gap: 5px

.l-masthead
  grid-column: 2
  grid-row: auto

.l-aside
  grid-column: 1
  grid-row: 1/3

.l-main
  grid-column: 2
  grid-row: 2
</style>
