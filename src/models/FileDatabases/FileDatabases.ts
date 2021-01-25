import dJSON from 'dirty-json'


class FileDatabases {
  private data: string = '{}'

  constructor(files: FileList) {
    const reader = new FileReader()

    if (files.length) {
      reader.readAsText(files.item(0), 'UTF-8')
      reader.onload = event => {
        // text = event.target.result
      }
    }
  }

  private handleJSON() {

  }

  getData() {
    return Promise.resolve(10)
  }
}


export default FileDatabases
