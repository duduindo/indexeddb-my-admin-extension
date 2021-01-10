<script>
  import uniqueId from 'lodash/uniqueId'

  let id = uniqueId('index-')

  export let name = ''
  export let keyPath = ''
  export let unique = false
</script>

<fieldset class="border border-info p-3 m-3">
  <legend class="w-auto pl-1 pr-1">Index <code>{name}</code></legend>

  <div class="form-group">
    <label for="{`${id}-name`}">Name</label>
    <input type="text" bind:value={name} class="form-control" id="{`${id}-name`}">
  </div>

  <div class="form-group">
    <label for="{`${id}-key-path`}">Key path</label>
    <input type="text" bind:value={keyPath} min="1" class="form-control" id="{`${id}-key-path`}">
  </div>

  <div class="form-group">
    <label for="{`${id}-unique`}">Unique</label>
    <select class="form-control" bind:value={unique} id="{`${id}-unique`}">
      <option value={false}>No</option>
      <option value={true}>Yes</option>
    </select>
  </div>

  <slot />
</fieldset>
