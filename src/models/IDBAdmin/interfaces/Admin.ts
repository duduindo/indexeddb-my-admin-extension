import DriverBridge from '../drivers/DriverBridge'
import InterfaceBridge from './InterfaceBridge'


class Admin implements InterfaceBridge {
  private driver: DriverBridge

  constructor(driver: DriverBridge) {
    this.driver = driver;
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

  async close(): Promise<void> {
    return await this.driver.close()
  }

  async getStructureFromDatabase(): Promise<DatabaseStruture> {
    const { name, version = '' } = await this.driver.getDescribeDatabase()
    const tables = await this.getTableStrutured()

    return {
      name,
      version,
      tables
    }
  }

  async getColumnNamesFromTable(tablename: string): Promise<string[]> {
    const names = await this.driver.getColumnNamesFromTable(tablename)

    return names
  }

  async getContentFromTable(tablename: string): Promise<object> {
    const content = await this.driver.getContentFromTable(tablename)

    return content
  }

  async isTableAutoIncrement(tablename: string): Promise<boolean> {
    const is = await this.driver.isTableAutoIncrement(tablename)

    return is
  }

  async getContentFromIndex(tablename: string, indexname: string): Promise<object> {
    const content = await this.driver.getContentFromIndex(tablename, indexname)

    return content
  }

  async getIndexChoice(tablename: string, indexname: string): Promise<string | null> {
    const choice = await this.driver.getIndexChoice(tablename, indexname)

    return choice
  }
}

export default Admin
