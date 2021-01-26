class FileReaderAsync {
  constructor(private reader: FileReader) {}

  readAsText(files: FileList): Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      if (files.length) {
        this.reader.readAsText(files.item(0), 'UTF-8')
      }

      this.reader.onload = event => resolve(event.target.result)
      this.reader.onerror = event => reject(event)
      this.reader.onabort = event => reject(event)
    })
  }
}


export default FileReaderAsync
