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

<div class="block">
  <div class="row">
    <div class="col">
      <h4>Stores from <code>{ name }</code></h4>
    </div>
  </div>

  <div class="row mt-3 mb-3">
    <div class="col">
      <table class="table table-sm table-striped table-borderless">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Store</th>
            <th scope="col">Key path</th>
            <th scope="col">Auto increment</th>
            <th scope="col">Indexes</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {#each tables as table}
            <tr>
              <th scope="row">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                </div>
              </th>
              <td>
                <a href="/pages/table/index.html?origin={origin}&name={name}&version={version}&table={table.name}">
                  {table.name}
                </a>
              </td>
              <td>
                {table.keyPath}
              </td>
              <td>
                {table.autoIncrement}
              </td>
              <td>
                {table.indexes.length}
              </td>
              <td>
                <button type="button" class="btn btn-secondary btn-sm">Favorite</button>
                <button type="button" class="btn btn-secondary btn-sm">Browser</button>
                <button type="button" class="btn btn-secondary btn-sm">Search</button>
                <button type="button" class="btn btn-secondary btn-sm">Delete</button>
                <button type="button" class="btn btn-secondary btn-sm">Insert</button>
              </td>

            </tr>
          {/each}
        </tbody>

        <tfoot>
          <tr>
            <td colspan="4">
              Total: {tables.length}
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <button type="button" class="btn btn-link btn-sm mr-3">Check all</button>
              <button type="button" class="btn btn-primary btn-sm">Copy</button>
              <button type="button" class="btn btn-primary btn-sm">Merge</button>
              <button type="button" class="btn btn-dark btn-sm">Export</button>
              <button type="button" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tfoot>

      </table>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <h6>Create store</h6>

      <form class="form-inline" action="/" method="GET">
        <div class="form-group">
          <label for="create-store-name" class="sr-only">store name</label>
          <input type="text" name="name" class="form-control form-control-sm mr-2" id="create-store-name" placeholder="Store name">
        </div>

        <button type="submit" class="btn btn-primary btn-sm">Create</button>
      </form>
    </div>
  </div>
</div>
