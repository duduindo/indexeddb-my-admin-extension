<script>
  import { structures } from '../../stores/database'
  import { params } from '../../stores/searchParams'
  import { setBreadcrumb } from '../../stores/breadcrumb'

  let origin, domain

  params.subscribe(value => {
    origin = value.origin || ''
    domain = origin.replace(/http(|s):\/\//, '')

    setBreadcrumb(domain)
  })
</script>

<div class="row mt-3 mb-3">
  <div class="col">
    <h6>Create database</h6>

    <form class="form-inline" action="/pages/table/create.html">
      <input type="hidden" name="origin" value={origin}>

      <div class="form-group">
        <label for="create-database-name" class="sr-only">database name</label>
        <input type="text" name="name" value="test2" class="form-control form-control-sm mr-2" id="create-database-name" placeholder="Database name" required>
      </div>

      <div class="form-group">
        <label for="create-database-version" class="sr-only">database version</label>
        <input type="number" name="version" min="1" value="1" class="form-control form-control-sm mr-2" id="create-database-version" placeholder="Database version" required>
      </div>

      <button type="submit" class="btn btn-primary btn-sm">Create</button>
    </form>
  </div>
</div>

<div class="row">
  <div class="col">
    <table class="table table-striped table-borderless">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Database</th>
          <th scope="col">Version</th>
          <th scope="col">Tables</th>
        </tr>
      </thead>

      <tbody>
        {#each $structures as structure}
          <tr>
            <th scope="row" width="60">
              <div class="form-check text-center">
                <input class="form-check-input" type="checkbox">
              </div>
            </th>
            <td>
              <a href="/pages/database/index.html?origin={origin}&name={structure.name}&version={structure.version}">
                {structure.name}
              </a>
            </td>
            <td>
              {structure.version}
            </td>
            <td>
              {structure.tables.length}
            </td>
          </tr>
        {/each}
      </tbody>

      <tfoot>
        <tr>
          <td colspan="4">
            Total: {$structures.length}
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <button type="button" class="btn btn-link btn-sm mr-3">Check all</button>
            <button type="button" class="btn btn-primary btn-sm">Copy</button>
            <button type="button" class="btn btn-primary btn-sm">Merge</button>
            <button type="button" class="btn btn-dark btn-sm">Export</button>
            <button type="button" class="btn btn-warning btn-sm">Upgrade</button>
            <button type="button" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
