<script>
  let value = ''
</script>

<fieldset class="form-inline mb-3 ml-5">
  <legend>Table <code hidden={value.length ? null : ''}>{value}</code></legend>

  <div class="form-group mr-3">
    <label for="">Name:</label>
    <input type="text" name="name[]" bind:value={value} class="form-control ml-2" placeholder="Name" required>
  </div>

  <div class="form-group mr-3">
    <label for="">Key Path:</label>
    <input type="text" name="key-path[]" class="form-control ml-2" placeholder="Key path">
  </div>

  <div class="form-group mr-3">
    <label for="">Auto increment:</label>
    <select class="custom-select ml-2" name="auto-increment[]" >
      <option selected value="false">No</option>
      <option value="true">Yes</option>
    </select>
  </div>
</fieldset>
