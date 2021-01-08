<script>
  import get from 'lodash/get'
  import { databases, addDatabase, removeDatabase, addTable, removeTable } from '../../stores/create'
  import Database from './Database'
  import Table from './Table'


</script>


{#each $databases as database, indexDatabase}
  <Database removeFn={removeDatabase.bind(null, indexDatabase)} bind:name={database.name}>

    {#each database.tables as table, indexTable}
      <Table removeFn={removeTable.bind(null, indexDatabase, indexTable)} bind:name={table.name} />
    {/each}

    <button on:click={() => addTable(indexDatabase)}>Add table</button>
  </Database>
{/each}

<hr>

<button on:click={addDatabase}>Add</button>

<!-- <button on:click={submit}>Submit</button> -->

