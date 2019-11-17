<script>
  import Router, { link } from 'svelte-spa-router'
  import Sum from './Sum/index.svelte'

  /**
   * Documentation
   * - https://www.npmjs.com/package/svelte-spa-router#define-your-routes
   */
  const routes = new Map()

  routes.set('*', Sum)
</script>


<div class="l-container platform-linux" id="app">
  <aside class="l-aside">
    <!-- <Expander /> -->
  </aside>

  <main class="l-main">
    <a href="/databases/" use:link>Databases</a>
    <hr>
    <a href="/*" use:link>Not found</a>
    <hr>
    <Router {routes} />
  </main>
</div>
