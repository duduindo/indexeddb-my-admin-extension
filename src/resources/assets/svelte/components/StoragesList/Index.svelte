<script>
  import { structures } from '../../stores/database'

  const params = new URLSearchParams(location.search)

  let origin = params.get('origin')
</script>

<div class="block">
  <div class="row">
    <div class="col">
      <h4>Databases from <code>{ origin.replace(/http(|s):\/\//, '') }</code></h4>
    </div>
  </div>

  <div class="row mt-3 mb-3">
    <div class="col">
      <h6>Create database</h6>

      <form class="form-inline" action="/" method="GET">
        <div class="form-group">
          <label for="create-database-name" class="sr-only">database name</label>
          <input type="text" name="name" class="form-control form-control-sm mr-2" id="create-database-name" placeholder="Database name">
        </div>

        <div class="form-group">
          <label for="create-database-version" class="sr-only">database version</label>
          <input type="number" name="version" min="1" value="1" class="form-control form-control-sm mr-2" id="create-database-version" placeholder="Database version">
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
            <th scope="col">Total tables</th>
          </tr>
        </thead>

        <tbody>
          {#each $structures as structure}
            <tr>
              <th scope="row">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
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
              <button type="button" class="btn btn-warning btn-sm">Upgrade</button>
              <button type="button" class="btn btn-danger btn-sm">Drop</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</div>

