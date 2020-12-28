import type { DatabaseStruture, IDBDatabaseInfo } from '../types'


abstract class Drive {
  protected connection: any

  constructor(connection: any) {
    this.connection = connection
  }

  // Database
  // =========================================================
  async close(): Promise<void> {
    return null
  }

  static async deleteDatabase(databasename: string): Promise<boolean> {
    return false
  }

  static async getDatabases(): Promise<IDBDatabaseInfo[]> {
    return []
  }

  async getDescribeDatabase(): Promise<IDBDatabaseInfo> {
    return null
  }

  static async openDatabase(name: string, version: number): Promise<any> {
    throw new DOMException(`Database (${name} - ${version}) not found`)
  }

  static async upgradeDatabase(struture: DatabaseStruture): Promise<any> {
    return null
  }


  // Table
  // =========================================================
  async addContentToTable(table: string, value: any): Promise<boolean> {
    return false
  }

  async clearContentFromTable(table: string): Promise<boolean> {
    return false
  }

  async deleteRow(table: string, key: any): Promise<boolean> {
    return false
  }

  async getColumnNamesFromTable(table: string): Promise<string[]> {
    return []
  }

  async getContentFromTable(table: string): Promise<object> {
    return null
  }

  async getRowsFromTable(table: string): Promise<number> {
    return 0
  }

  async getTableNames(): Promise<string[]> {
    return []
  }

  async isTableAutoIncrement(table: string): Promise<boolean> {
    return false
  }

  async putContentToTable(table: string, value: any, key?: any): Promise<boolean> {
    return false
  }


  // Index
  // =========================================================
  async getContentFromIndex(table: string, indexname: string): Promise<object> {
    return null
  }

  async getIndexChoice(table: string, indexname: string): Promise<string | null> {
    return null
  }

  async getIndexNames(table: string): Promise<string[]> {
    return []
  }

  async getRowsFromIndex(table: string, indexname: string): Promise<number> {
    return 0
  }
}


export default Drive
