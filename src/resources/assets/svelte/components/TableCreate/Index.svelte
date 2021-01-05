<script>
  import { params } from '../../stores/searchParams'
  import { setBreadcrumb } from '../../stores/breadcrumb'
  import Databases from './Databases'

  let origin, domain, name, version
  let fields = 2

  params.subscribe(value => {
    name = value.name
    version = value.version || 1
    origin = value.origin || ''
    domain = origin.replace(/http(|s):\/\//, '')

    setBreadcrumb(domain, `/pages/database/list.html?origin=${origin}`)
    setBreadcrumb('Create databases')
  })
</script>


<div class="block">
  <div class="row">
    <div class="col">

      <form class="mt-3" action="/" method="GET">
        <input type="hidden" name="origin" value="{origin}">

        <Databases>

        </Databases>
      </form>
    </div>
  </div>
</div>
