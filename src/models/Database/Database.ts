import Driver from './drivers/Driver'
import IDatabaseBridge from './IDatabaseBridge'
import type { DatabaseStruture, DatabaseIndexStruture, DatabaseTableStruture } from './types'


class Database implements IDatabaseBridge {
  constructor(private driver: Driver) {}

  /*
   * @param $tablename name of table
   *
   * @return promise array DatabaseIndexStruture
   */
  private async getIndexStrutured(tablename: string): Promise<DatabaseIndexStruture[]> {
    const indexnames = await this.driver.getIndexNames(tablename)
    const indexes = indexnames.map(name => ({ name }))

    return indexes
  }

  /*
   * @return promise array DatabaseTableStruture
   */
  private async getTableStrutured(): Promise<DatabaseTableStruture[]> {
    const tablenames = await this.driver.getTableNames()
    const tables = []

    for (const name of tablenames) {
      const indexes = await this.getIndexStrutured(name)

      tables.push({
        name,
        indexes
      })
    }

    return tables
  }

  // Database
  // =========================================================
  async getStructureFromDatabase(): Promise<DatabaseStruture> {
    const describe = await this.driver.getDescribeDatabase()
    const tables = await this.getTableStrutured()
    const result = { ...describe, tables }

    return result
  }

  // Table
  // =========================================================
  async addContentToTable(tablename: string, value: any): Promise<boolean> {
    return await this.driver.addContentToTable(tablename, value)
  }

  async clearContentFromTable(tablename: string): Promise<boolean> {
    return await this.driver.clearContentFromTable(tablename)
  }

  async deleteRow(tablename: string, key: any): Promise<boolean> {
    return await this.driver.deleteRow(tablename, key)
  }

  async getColumnNamesFromTable(tablename: string): Promise<string[]> {
    return await this.driver.getColumnNamesFromTable(tablename)
  }

  async getContentFromTable(tablename: string): Promise<object> {
    return await this.driver.getContentFromTable(tablename)
  }

  async getRowsFromTable(tablename: string): Promise<number> {
    return await this.driver.getRowsFromTable(tablename)
  }

  async getTableNames(): Promise<string[]> {
    return await this.driver.getTableNames()
  }

  async isTableAutoIncrement(tablename: string): Promise<boolean> {
    return await this.driver.isTableAutoIncrement(tablename)
  }

  async putContentToTable(tablename: string, value: any, key?: any): Promise<boolean> {
    return await this.driver.putContentToTable(tablename, value, key)
  }


  // Index
  // =========================================================
  async getContentFromIndex(tablename: string, indexname: string): Promise<object> {
    return await this.driver.getContentFromIndex(tablename, indexname)
  }

  async getIndexChoice(tablename: string, indexname: string): Promise<string> {
    return await this.driver.getIndexChoice(tablename, indexname)
  }

  async getIndexNames(tablename: string): Promise<string[]> {
    return await this.driver.getIndexNames(tablename)
  }

  async getRowsFromIndex(tablename: string, indexname: string): Promise<number> {
    return await this.driver.getRowsFromIndex(tablename, indexname)
  }
}


export default Database
