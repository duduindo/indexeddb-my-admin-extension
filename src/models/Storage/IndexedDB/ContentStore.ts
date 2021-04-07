class ContentStore {
  constructor(private store: any) {}

  async getPromise() {
    const keyPath = this.store.keyPath
    const keys = await this.store.getAllKeys() || []
    const values = await this.store.getAll()
    const content: any = {}

    content['#'] = keys.map((e: any, i: number) => i)

    if (keyPath) {
      content[keyPath] = keys
    }

    content['value'] = values

    return content
  }
}


export default ContentStore
