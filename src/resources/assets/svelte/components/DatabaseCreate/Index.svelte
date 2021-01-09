<script>
  import { storage } from '../../stores/create'
  import Database from './Database'
  import Table from './Table'


  storage.subscribe(value => {
    console.log('subscribe: ', value)
  })
</script>


{#each $storage.databases as database}
  <Database
    bind:name={database.update.name}
    bind:version={database.update.version}>

    {#each database.tables as table}
      <Table
        bind:name={table.update.name}
        bind:keyPath={table.update.keyPath}
        bind:autoIncrement={table.update.autoIncrement}>

        <button on:click={storage.removeTable.bind(null, database, table)}>remove Table</button>
      </Table>
    {/each}

    <button on:click={storage.addTable.bind(null, database)}>add Table</button>
  </Database>
{/each}

<button on:click={storage.addDatabase}>add Database</button>
<button on:click={() => console.log( storage.getAllDatabases() )}>Submit</button>
