import { openDB } from 'idb'
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

  /*
   * @return promise array DatabaseStruture
   */
  async getStructureFromDatabase(): Promise<DatabaseStruture> {
    const { name, version = '' } = await this.driver.getDescribeDatabase()
    const tables = await this.getTableStrutured()

    return {
      name,
      version,
      tables
    }
  }
}

export default Admin
