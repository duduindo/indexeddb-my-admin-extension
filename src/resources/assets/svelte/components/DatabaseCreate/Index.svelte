<script>
  import get from 'lodash/get'
  // import { databases, getDatabases, addDatabase, removeDatabase, addTable, removeTable } from '../../stores/create'
  import { storage } from '../../stores/create'


  storage.subscribe(value => {
    console.log('subscribe: ', value)
  })
</script>


{#each storage.getDatabases() as database}
  <p>opaa</p>
{/each}

<button on:click={storage.addDatabase}>add Database</button>

<!--
{#each $databases as database}
  <input type="text" bind:value={database.update.name}>
  <button on:click={removeDatabase.bind(null, database)}>Remove</button>
  <button on:click={addTable.bind(null, database)}>Add table</button>

  <div class="mt-1 ml-3">
    {#each database.tables as table}
      <input type="text" bind:value={table.update.name}>
      <button on:click={removeTable.bind(null, database, table)}>Remove</button>
      <hr>
    {/each}
  </div>
  <hr>
{/each}

<button on:click={addDatabase}>add Database</button>
<button on:click={() => console.log(getDatabases())}>Submit</button>
 -->
