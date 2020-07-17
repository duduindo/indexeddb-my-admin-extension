<script>
  import uniqBy from 'lodash/uniqBy'
  import { onMount } from 'svelte'
  import { link } from 'svelte-spa-router'
  import { data } from 'views/svelte/stores'
  import payloadToPromise from 'views/svelte/utils/payloadToPromise'

  const localStorageResult = [
    { database:"Banco nome", version:1 },
    { database:"biblioteca2", version:158272957993319 },
    { database:"gih-reservations", version:12 },
    { database:"library", version:11 },
    { database:"test", version:4 },
    { database:"test3", version:1 },
    { database:"undefined", version:158272957993319 },
  ]

  const type = 'GET_STRUCTURE_FROM_DATABASE'
  let dbs = []
  $: handleData($data)
  $: databases = []



  onMount(() => {
    localStorageResult.forEach(v => {
      data.request(type, v)
    })
  })

  function handleData(action) {
    const isThisType = action.type === type

    if (!isThisType) {
      return;
    }

    payloadToPromise(action.payload)
      .then(value => {
          dbs = [...dbs, value]
          dbs = uniqBy(dbs, 'name')

          databases = dbs
        })
        .catch(err => alert(err))
  }

</script>

<ul>
  <li><a href="/" use:link>Home</a></li>
</ul>

<!-- Databases -->
<ul class="menu-list">
  {#each databases as database}
    <li>
      <a href="/database/?database={database.name}&version={database.version}" use:link>{ database.name }</a>

      <ul>
        <!-- Tables -->
        {#each database.tables as table}
          <a href="/table/?database={database.name}&version={database.version}&table={table.name}" use:link>{ table.name }</a>

          <ul>
            <!-- Indexes -->
            {#each table.indexes as index}
              <a href="/index/?database={database.name}&version={database.version}&table={table.name}&index={index.name}" use:link>{ index.name }</a>
              <!-- <a href="/index/{storage.id}/{database.name}/{database.version}/{table.name}/{index.name}/" use:link>{ index.name }</a> -->
            {/each}
          </ul>
        {/each}
      </ul>
    </li>
  {/each}
</ul>
