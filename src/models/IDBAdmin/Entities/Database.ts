class Database {
  private tables: string[] = []

  setTables(tables: string[]) {
    this.tables = tables
  }

  getTables(): string[] {
    return this.tables
  }

  deleteTable(name: string) {
    this.tables = this.tables.filter(table => table !== name)
  }
}

export default Database
