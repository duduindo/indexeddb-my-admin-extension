<script>
  let text = '{"databases":[{"name":"Users","keyPath":"id","unique":true,"stores":[{"name":"Pages visited","keyPath":"title","autoIncrement":true,"indexes":[{"name":"Dates","keyPath":"timestamp","unique":true}]}]}]}'
  let fileInput
  let textInput


  function handleInput() {
    const { files } = fileInput
    let reader

    if (files.length) {
      reader = new FileReader()

      reader.readAsText(files[0], 'UTF-8')
      reader.onload = event => {
        text = event.target.result
        fileInput.value = ''
      }
    }
  }

</script>

<form>
  <div class="alert alert-warning" role="alert" hidden><strong>Wrong format!</strong> <i>Where? I don't know</i></div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1" class="sr-only">Example textarea</label>
    <textarea bind:this={textInput} bind:value={text} placeholder="Paste, import file or drag and drop" class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlFile1" class="sr-only">Import file</label>
    <input bind:this={fileInput} on:input={handleInput} accept=".json" type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>
