<script>
  export let structures
</script>

{#each structures as structure}
  <!-- Database -->
  <details>
    <summary>{structure.name}</summary>

    <!-- Table -->
    {#each structure.tables as table}
      <details>
        <summary>{table.name}</summary>

        <!-- Index -->
        {#each table.indexes as index}
          <details>
            <summary>{index.name}</summary>
          </details>
        {/each}
      </details>
    {/each}
  </details>
{/each}
