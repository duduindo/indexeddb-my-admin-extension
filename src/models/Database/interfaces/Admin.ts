import DriverBridge from '../drivers/IDriverBridge'
import InterfaceBridge from './IInterfaceBridge'


class Admin implements InterfaceBridge {
  private driver: DriverBridge

  constructor(driver: DriverBridge) {
    this.driver = driver
  }

  /*
   * @param $resolved any
   * @param $rejected any
   *
   * @return DatabaseAdminResponse
   */
  private formatResponse(resolved: any = null, rejected: any = null): DatabaseAdminResponse {
    return { resolved, rejected }
  }

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
  async deleteDatabase(databasename: string): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.deleteDatabase(databasename)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }

  async getStructureFromDatabase(): Promise<DatabaseAdminResponse> {
    try {
      const describe = await this.driver.getDescribeDatabase()
      const tables = await this.getTableStrutured()
      const result = { ...describe, tables }

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }


  // Table
  // =========================================================
  async addContentToTable(tablename: string, value: any): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.addContentToTable(tablename, value)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }

  async clearContentFromTable(tablename: string): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.clearContentFromTable(tablename)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }

  async deleteRow(tablename: string, key: any): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.deleteRow(tablename, key)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }

  async getColumnNamesFromTable(tablename: string): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.getColumnNamesFromTable(tablename)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }

  async getContentFromTable(tablename: string): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.getContentFromTable(tablename)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }

  async getRowsFromTable(tablename: string): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.getRowsFromTable(tablename)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }

  async getTableNames(): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.getTableNames()

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }

  async isTableAutoIncrement(tablename: string): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.isTableAutoIncrement(tablename)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }

  async putContentToTable(tablename: string, value: any, key?: any): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.putContentToTable(tablename, value, key)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }


  // Index
  // =========================================================
  async getContentFromIndex(tablename: string, indexname: string): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.getContentFromIndex(tablename, indexname)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }

  async getIndexChoice(tablename: string, indexname: string): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.getIndexChoice(tablename, indexname)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }

  async getIndexNames(tablename: string): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.getIndexNames(tablename)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }

  async getRowsFromIndex(tablename: string, indexname: string): Promise<DatabaseAdminResponse> {
    try {
      const result = await this.driver.getRowsFromIndex(tablename, indexname)

      return this.formatResponse(result)
    } catch(e) {
      return this.formatResponse(null, e.message)
    }
  }
}


export default Admin
