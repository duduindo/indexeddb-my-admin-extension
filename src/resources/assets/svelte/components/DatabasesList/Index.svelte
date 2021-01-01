<script>
  import get from 'lodash/get'
  import find from 'lodash/find'
  import { structures } from '../../stores/database'

  const params = new URLSearchParams(location.search)

  let tables = []
  let origin = params.get('origin')
  let name = params.get('name')
  let version = params.get('version')


  structures.subscribe((value = []) => {
    const database = find(value, ['name', name])

    tables = get(database, 'tables', [])
  })
</script>

<h4>Stores from <code>{ name }</code></h4>


<div class="list-group">
  {#each tables as table}
    <a href="/pages/database/table/index.html?origin={origin}&name={name}&version={version}&table={table.name}" class="list-group-item d-flex justify-content-between align-items-center">
      <span>{table.name}</span>
      <span class="badge badge-primary badge-dark">{table.indexes.length} indexes</span>
    </a>
  {/each}
</div>

