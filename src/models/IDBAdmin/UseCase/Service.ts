// import Database from '@/models/IDBAdmin/Entities/Database'
// import Table from '@/models/IDBAdmin/Entities/Table'
// import Index from '@/models/IDBAdmin/Entities/Index'


class Service {
  private repository: any = null // it need an interface: "RepositoryInterface"

  constructor(repository: any) {
    this.repository = repository
  }

  async getDatabaseNames(): Promise<DatabaseNamesType[]> {
    return await this.repository.getDatabaseNames()
  }

  async getStoreNames(database: DatabaseNamesType): Promise<string[]> {
    return await this.repository.getStoreNames(database)
  }

  async getIndexNames(database: DatabaseNamesType, tablename: string): Promise<string[]> {
    return await this.repository.getIndexNames(database, tablename)
  }


}

export default Service
