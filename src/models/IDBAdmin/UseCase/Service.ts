import Database from '@/models/IDBAdmin/Entities/Database'
import Table from '@/models/IDBAdmin/Entities/Table'
import Index from '@/models/IDBAdmin/Entities/Index'


class Service {
  private repository: any = null // it need an interface: "RepositoryInterface"

  constructor(repository: any) {
    this.repository = repository
  }

  async getDatabases(): Promise<Database[]> {
    return await this.repository.getDatabases()
  }

  async getTables(database: Database): Promise<Table[]> {
    return await this.repository.getTables(database)
  }

  async getIndexes(database: Database, table: Table): Promise<Index[]> {
    return await this.repository.getIndexes(database, table)
  }

  async getContentFromTable(database: Database, table: Table): Promise<any[]> {
    return await this.repository.getContentFromTable(database, table)
  }

  async getContentFromIndex(database: Database, table: Table, index: Index): Promise<any[]> {
    return await this.repository.getContentFromTable(database, table, index)
  }
}

export default Service
