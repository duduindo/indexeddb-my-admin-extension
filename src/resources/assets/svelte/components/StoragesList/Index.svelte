<script>
  import { structures } from '../../stores/database'

  const params = new URLSearchParams(location.search)

  let origin = params.get('origin')
</script>

<h4>Databases from <code>{ origin.replace(/http(|s):\/\//, '') }</code></h4>

<div class="list-group">
  {#each $structures as structure}
    <a href="/pages/database/index.html?origin={origin}&name={structure.name}&version={structure.version}" class="list-group-item d-flex justify-content-between align-items-center">
      <span>{structure.name}</span>
      <span class="badge badge-primary badge-dark">{structure.tables.length} stores</span>
    </a>
  {/each}
</div>
