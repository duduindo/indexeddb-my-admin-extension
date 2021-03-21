<script>
  import { params } from '../../stores/searchParams'

  $: origin = $params.origin
</script>


<input type="hidden" name="origin" value={origin}>

<div class="field-body">
  <div class="field">
    <div class="control">
      <input class="input is-small" type="text" name="name" required placeholder="Database name">
    </div>
  </div>

  <div class="field">
    <div class="control">
      <input class="input is-small" type="number" value="1" name="version" min="1" required placeholder="Database version">
    </div>
  </div>

  <div class="field">
    <div class="control">
      <button class="button is-small">Create</button>
    </div>
  </div>
</div>
