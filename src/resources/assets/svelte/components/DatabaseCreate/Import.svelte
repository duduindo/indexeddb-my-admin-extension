<script>
  import FileDatabases from '@/models/FileDatabases/FileDatabases'

  let text = '{"databases":[{"name":"Users","keyPath":"id","unique":true,"stores":[{"name":"Pages visited","keyPath":"title","autoIncrement":true,"indexes":[{"name":"Dates","keyPath":"timestamp","unique":true}]}]}]}'
  let fileInput
  let textarea
  let formClass = ''

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

    const filesDatabases = new FileDatabases(files)

    filesDatabases.getData()
      .then(e => console.log('THEN: ', e))
      .catch(e => console.log('CATCH: ', e))
  }

  function handleDrop(event) {
    const { files } = event.dataTransfer
    let reader

    if (files.length) {
      reader = new FileReader()

      reader.readAsText(files[0], 'UTF-8')
      reader.onload = event => {
        text = event.target.result
        formClass = ''
      }
    }
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

  // $: console.log( dJSON.parse(text) )
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
