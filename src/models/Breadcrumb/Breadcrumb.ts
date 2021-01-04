class Breadcrumb {
  private current = []

  setItem(name: string, href?: string) {
    let current = this.current.slice()

    current = current.map(path => ({ ...path, isActive: false }))
    current = [...current, { name, href, isActive: true }]

    this.current = current
  }

  getItems(): any[] {
    return this.current.slice()
  }
}

export default Breadcrumb
