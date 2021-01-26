<script context="module">
  import FileReaderAsync from '@/models/FileReaderAsync/FileReaderAsync'

  function handleFiles(files) {
    const reader = new FileReader()
    const readerAsync = new FileReaderAsync(reader)

    return readerAsync.readAsText(files)
  }
</script>

<script>
  let text = '{"databases":[{"name":"Users","keyPath":"id","unique":true,"stores":[{"name":"Pages visited","keyPath":"title","autoIncrement":true,"indexes":[{"name":"Dates","keyPath":"timestamp","unique":true}]}]}]}'
  let fileInput
  let textarea
  let formClass = ''

  function handleInput() {
    handleFiles(fileInput.files)
      .then(data => {
        text = data
        fileInput.value = ''
      })
      .catch(e => console.log('CATCH: ', e))
  }

  function handleDrop(event) {
    handleFiles(event.dataTransfer.files)
      .then(data => {
        text = data
        formClass = ''
      })
      .catch(e => console.log('CATCH: ', e))
  }

  function handleDropOver() {
    formClass = 'border border-info'
  }

  function handleLeave() {
    formClass = ''
  }

  function selectAll() {
    textarea.select()
  }
</script>

<form class="{formClass}" on:drop|preventDefault={handleDrop} on:dragover={handleDropOver} on:dragleave={handleLeave}>
  <div class="alert alert-warning" role="alert" hidden><strong>Wrong format!</strong> <i>Where? I don't know</i></div>

  <div class="form-group">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button on:click={selectAll} type="button" class="btn btn-secondary">Select all</button>
    </div>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1" class="sr-only">Example textarea</label>
    <textarea bind:this={textarea} bind:value={text} placeholder="Paste, import file or drag and drop" class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlFile1" class="sr-only">Import file</label>
    <input bind:this={fileInput} on:input={handleInput} accept=".json" type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>
