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


<div class="mb-6">
  <h2 class="title is-5">Create database</h2>

  <form action="/pages/database/create.html">
    <input type="hidden" name="origin" value={origin}>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input class="input" name="name" type="text" placeholder="Database name">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input class="input" type="number" name="version" min="1" value="1" placeholder="Database version">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button type="submit" class="button is-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  </form>
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
              <label class="checkbox is-block p-1" aria-label="Select the database {structure.name}">
                <input type="checkbox">
              </label>
            </th>
            <td>
              <a href="/pages/database/index.html?origin={origin}&name={structure.name}&version={structure.version}" class="is-size-5 is-block">
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
            <button type="button" class="button">Check all</button>
            <button type="button" class="button">Copy</button>
            <button type="button" class="button">Merge</button>
            <button type="button" class="button">Export</button>
            <button type="button" class="button">Upgrade</button>
            <button type="button" class="button">Delete</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
