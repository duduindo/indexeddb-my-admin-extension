<script>
  export let name = ''
  export let removeFn
</script>

<fieldset class="ml-3 bg-secondary">
  <legend>Table: <code>{name}</code></legend>
  <label for="">Nome</label>
  <input type="text" bind:value={name}>

  <button on:click={removeFn}>Remove</button>
</fieldset>
