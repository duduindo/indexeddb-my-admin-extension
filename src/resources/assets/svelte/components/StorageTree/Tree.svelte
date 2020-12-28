<script>
  export let databases
</script>

{#each databases as database}
  <p>{database.name}</p>
{/each}

<details open="">
  <summary>Database one</summary>
  <details open="">
    <summary>Table one</summary>
    <details>
      <summary>Index one</summary>
    </details>
    <details>
      <summary>Index one</summary>
    </details>
  </details>
</details>
