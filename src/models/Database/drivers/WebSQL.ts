import PromisedWebSQL from 'promised-websql'


class WebSQL {
  private connection: any

  constructor(connection: any) {
    this.connection = connection
  }

  // Database
  // =========================================================
  async close(): Promise<void> {}

  async deleteDatabase(databasename: string): Promise<void> {
    const db = await this.connection

    // @ts-ignore
    db.transaction(function (tx) {
      tx.executeSql('DROP DATABASE mydb');
    });
  }

  // Static
  static async openDatabase(name: string, version: string, comment: string, size: number): Promise<any> {
    // @ts-ignore
    return PromisedWebSQL(openDatabase(name, version, comment, size))
  }

  async getDescribeDatabase(): Promise<DatabaseDescription> {
    const db = await this.connection
    const description = { name: '', version: db.version }

    return description
  }


  // Table
  // =========================================================
  async addContentToTable(table: string, value: object): Promise<any> {
    const db = await this.connection
    const columns = Object.keys(value).join(', ')
    const values = Object.values(value).map(v => `"${v}"`).join(', ')
    const any = await db.sql(`INSERT INTO ${table} (${columns}) VALUES (${values})`)

    return any
  }

  async clearContentFromTable(table: string): Promise<any> {
    const db = await this.connection
    const any = await db.sql(`DELETE FROM ${table}`)

    return any
  }

  async deleteRow(table: string, key: object): Promise<any> {
    const db = await this.connection
    const column = Object.keys(key).join('')
    const value = Object.values(key).map(v => `"${v}"`).join('')
    const any = await db.sql(`DELETE FROM ${table} WHERE ${column} = ${value}`)

    return any
  }

  async getColumnNamesFromTable(table: string): Promise<string[]> {
    const db = await this.connection
    const query = await db.sql(`SELECT DISTINCT * FROM ${table}`)

    return query
  }
}


export default WebSQL
