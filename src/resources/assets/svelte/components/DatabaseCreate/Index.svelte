<script>
  import get from 'lodash/get'
  import { databases, addDatabase, removeDatabase, addTable } from '../../stores/create'
  import Database from './Database'
  import Table from './Table'


</script>


{#each $databases as database, i}
  <Database removeFn={removeDatabase.bind(null, i)} bind:name={database.name}>

    {#each database.tables as table, i}
      <Table removeFn={removeDatabase.bind(null, i)} bind:name={table.name} />
    {/each}

    <button on:click={() => addTable(i)}>Add table</button>
  </Database>
{/each}

<hr>

<button on:click={addDatabase}>Add</button>

<!-- <button on:click={submit}>Submit</button> -->

