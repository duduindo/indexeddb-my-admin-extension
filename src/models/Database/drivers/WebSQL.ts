
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
    return await openDatabase(name, version, comment, size);
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

    return new Promise((resolve, reject) => {
      db.transaction(function (tx: any) {
        tx.executeSql(`INSERT INTO ${table} (${columns}) VALUES (${values})`, [], function(tx: any, {rowsAffected, insertId}: any) {
          resolve({ insertId, rowsAffected })
        }, function(tx: any, { code, message }: any) {
          reject({ code, message })
        });
      });
    })
  }

  async clearContentFromTable(table: string): Promise<any> {
    const db = await this.connection

    return new Promise((resolve, reject) => {
      db.transaction(function (tx: any) {
        tx.executeSql(`DELETE FROM ${table}`, [], function(tx: any, {rowsAffected}: any) {
          resolve({ rowsAffected })
        }, function(tx: any, { code, message }: any) {
          reject({ code, message })
        });
      });
    })
  }

  async deleteRow(table: string, key: object): Promise<any> {
    const db = await this.connection
    const column = Object.keys(key).join('')
    const value = Object.values(key).map(v => `"${v}"`).join('')

    // @ts-ignore
    return await db.transaction(async function (tx) {
      return await tx.executeSql(`DELETE FROM ${table} WHERE ${column} = ${value}`);
    });
  }

  async getColumnNamesFromTable(table: string): Promise<string[]> {
    const db = await this.connection
    let result: any = []

    return new Promise((resolve) => {
      const a = db.transaction((tx: any) => {
        tx.executeSql(`SELECT DISTINCT * FROM ${table}`, [], function(tx: any, results: any) {
          resolve(results)
        });
      });
    })

  }
}


export default WebSQL


// SELECT * FROM LOGS WHERE id = 2
