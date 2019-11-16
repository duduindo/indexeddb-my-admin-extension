<script>
  import Router from 'svelte-spa-router'
  // import Sum from './Sum/index.svelte'

  /**
   * Documentation
   * - https://www.npmjs.com/package/svelte-spa-router#define-your-routes
   */
  const routes = new Map()

  // routes.set('*', Sum)
</script>


<div id="app">

  <main>
    <Router {routes} />
  </main>
</div>
