<script>
  let value = ''
</script>

<fieldset class="form-inline mb-3">
  <legend>Database <code hidden={value.length ? null : ''}>{value}</code></legend>

  <div class="form-group mr-3">
    <label for="">Name:</label>
    <input type="text" name="database-name[]" bind:value={value} class="form-control ml-2" placeholder="Name" required>
  </div>

  <div class="form-group mr-3">
    <label for="">Version:</label>
    <input type="nunmber" name="database-version[]" class="form-control ml-2" placeholder="Version" required>
  </div>
</fieldset>
