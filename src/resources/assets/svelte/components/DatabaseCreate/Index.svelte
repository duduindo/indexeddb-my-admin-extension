<script>
  import { storage } from '../../stores/create'
  import Database from './Database'
  import Table from './Table'
  import Indexe from './Indexe'

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

        {#each table.indexes as index}
          <Indexe
            bind:name={index.update.name}
            bind:keyPath={index.update.keyPath}
            bind:unique={index.update.unique}>

            <button class="btn btn-danger" on:click={storage.removeIndex.bind(null, table, index)}>Remove index</button>
          </Indexe>
        {/each}

        <button class="btn btn-danger" on:click={storage.removeTable.bind(null, database, table)}>Remove table</button>
        <button class="btn btn-primary" on:click={storage.addIndex.bind(null, table)}>Add index</button>
      </Table>
    {/each}

    <button class="btn btn-danger" on:click={storage.removeDatabase.bind(null, database)}>Remove database</button>
    <button class="btn btn-primary" on:click={storage.addTable.bind(null, database)}>Add table</button>
  </Database>
{/each}

<button class="btn btn-primary" on:click={storage.addDatabase}>Add database</button>
<button class="btn btn-success" on:click={() => console.log( storage.getAllDatabases() )}>Submit</button>
