<script>
  import { params } from '../../stores/searchParams'
  import { setBreadcrumb } from '../../stores/breadcrumb'
  import Fieldset from './Fieldset'
  import Table from './Table'

  // let origin, domain, name, version

  // params.subscribe(value => {
  //   name = value.name
  //   version = value.version || 1
  //   origin = value.origin || ''
  //   domain = origin.replace(/http(|s):\/\//, '')

  //   setBreadcrumb(domain, `/pages/database/list.html?origin=${origin}`)
  //   setBreadcrumb('Create databases')
  // })
  let cmps = []
  let list = [
    {id: 1}
  ]

  const handleRemove = (index) => {
    list = [
      ...list.slice(0, index),
      ...list.slice(index + 1, list.length)
    ]
  }

  const add = id => {
    list = [
      ...list,
      { id }
    ]
  }

  $: cmps = cmps.filter(el => el)
  $: console.log(cmps)
</script>


<div class="block">
  <div class="row">
    <div class="col">

      <form class="mt-3" action="/" method="GET">
        <!-- <input type="hidden" name="origin" value="{origin}"> -->

        {#each list as item, index (item.id)}
          <Fieldset bind:this={cmps[index]} removeFn={() => handleRemove(index)} />
        {/each}

        <button type="button" class="btn btn-primary" on:click={() => add( Date.now() )}>Add Database</button>
        <!-- <button type="button" class="btn btn-success" on:click={() => console.log(structure)}>Submit</button> -->
      </form>
    </div>
  </div>
</div>
