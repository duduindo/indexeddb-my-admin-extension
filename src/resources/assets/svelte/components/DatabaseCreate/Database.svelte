<script>
  let fieldset
  let name = ''
  let version

  function remove() {
    const parent = fieldset.parentElement

    parent.removeChild(fieldset)
  }
</script>

<fieldset class="form-inline mb-3" bind:this={fieldset}>
  <legend>Database <code hidden={name.length ? null : ''}>{name}</code></legend>

  <div class="form-group mr-3">
    <label for="">Name:</label>
    <input type="text" name="database-name[]" bind:value={name} class="form-control ml-2" placeholder="Name" required>
  </div>

  <div class="form-group mr-3">
    <label for="">Version:</label>
    <input type="number" name="database-version[]" bind:value={version} class="form-control ml-2" placeholder="Version" required>
  </div>

  <button type="button" class="btn btn-danger" on:click={remove}>Remove</button>
</fieldset>

<slot />
