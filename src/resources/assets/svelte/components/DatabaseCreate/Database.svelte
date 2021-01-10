<script>
  import uniqueId from 'lodash/uniqueId'

  let id = uniqueId('database-')
  let idName = `${id}-name`
  let idVersion = `${id}-version`

  export let name = ''
  export let version = 1
</script>

<fieldset class="border border-primary p-3 m-3">
  <legend class="w-auto pl-1 pr-1">Database <code>{name}</code></legend>

  <div class="form-group">
    <label for="{idName}">Name</label>
    <input type="text" bind:value={name} class="form-control form-control" id="{idName}">
  </div>

  <div class="form-group">
    <label for="{idVersion}">Version</label>
    <input type="number" bind:value={version} min="1" class="form-control form-control" id="{idVersion}">
  </div>

  <slot />
</fieldset>

