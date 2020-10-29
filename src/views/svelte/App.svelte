<script>
  // import 'views/sass/index.sass'
  // import 'views/sass/index.sass'
  import Router from 'svelte-spa-router'
  import Home from 'views/svelte/routes/pages/Home.svelte'
  import Table from 'views/svelte/routes/pages/Table.svelte'
  import Index from 'views/svelte/routes/pages/Index.svelte'
  import Expander from 'views/svelte/routes/components/Expander.svelte'


  const routes = new Map()

  routes.set('/', Home)
  routes.set('/table/', Table)
  routes.set('/index/', Index)
  // routes.set('/index/:storage:/:database:/:version:/:table:/:index:/', Index)

  // // Exact path
  // const routes = {
  //   '/': Home,
  //   '/table/': Table,
  //   '/index/': Index,
  // }
</script>


<div class="l-container">
  <aside class="l-aside">
    <Expander />
  </aside>

  <main class="l-main">
    <Router {routes} />
  </main>
</div>

