<script>
  import uniqueId from 'lodash/uniqueId'

  let id = uniqueId('table-')

  export let name = ''
  export let keyPath = ''
  export let autoIncrement = false
</script>

<fieldset class="ml-5">
  <legend>Table <code>{name}</code></legend>

  <div class="form-group">
    <label for="{`${id}-name`}">Name</label>
    <input type="text" bind:value={name} class="form-control" id="{`${id}-name`}">
  </div>

  <div class="form-group">
    <label for="{`${id}-key-path`}">Key path</label>
    <input type="text" bind:value={keyPath} min="1" class="form-control" id="{`${id}-key-path`}">
  </div>

  <div class="form-group">
    <label for="{`${id}-auto-increment`}">Auto increment</label>
    <select class="form-control" bind:value={autoIncrement} id="{`${id}-auto-increment`}">
      <option value={false}>No</option>
      <option value={true}>Yes</option>
    </select>
  </div>

  <slot />
</fieldset>
