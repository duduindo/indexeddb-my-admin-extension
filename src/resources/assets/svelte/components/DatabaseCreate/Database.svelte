<script>
  export let name = ''
  export let removeFn
</script>

<fieldset>
  <legend>Database: <code>{name}</code></legend>
  <label for="">Nome</label>
  <input type="text" bind:value={name}>

  <button on:click={removeFn}>Remove</button>
</fieldset>

<slot />
