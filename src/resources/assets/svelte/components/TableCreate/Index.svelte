<script>
  import { params } from '../../stores/searchParams'
  import { setBreadcrumb } from '../../stores/breadcrumb'

  let origin, domain, name, version
  let fields = 2

  params.subscribe(value => {
    name = value.name
    version = value.version || 1
    origin = value.origin || ''
    domain = origin.replace(/http(|s):\/\//, '')

    setBreadcrumb(domain, `/pages/database/list.html?origin=${origin}`)
    setBreadcrumb(`${name} (version: ${version})`)
    setBreadcrumb('Create stores')
  })
</script>

<div class="block">
  <div class="row">
    <div class="col">

      <form class="mt-3" action="/" method="GET">
        <input type="hidden" name="origin" value="{origin}">

        {#each Array(fields) as _, i}
          <fieldset class="form-inline mb-3">
            <div class="form-group mr-3">
              <label for="name{i}">Name:</label>
              <input type="text" name="name{i}" id="name{i}" class="form-control ml-2" placeholder="Name" required>
            </div>

            <div class="form-group mr-3">
              <label for="key-path{i}">Key Path:</label>
              <input type="text" name="key-path{i}" id="key-path{i}" class="form-control ml-2" placeholder="Key path">
            </div>

            <div class="form-group mr-3">
              <label for="auto-increment{i}">Auto increment:</label>
              <select class="custom-select ml-2" name="auto-increment{i}" id="auto-increment{i}">
                <option selected value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
          </fieldset>
        {/each}

        <button type="button" class="btn btn-primary" on:click={() => fields++}>Add store</button>
        <button type="button" class="btn btn-danger" on:click={() => fields--}>Remove last store</button>
        <button type="submit" class="btn btn-success" disabled={fields < 1}>Go to Indexes</button>
      </form>

    </div>
  </div>
</div>
