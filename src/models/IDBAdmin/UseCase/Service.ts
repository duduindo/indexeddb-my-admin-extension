import Database from '@/models/IDBAdmin/Entities/Database'
import Table from '@/models/IDBAdmin/Entities/Table'


class Service {
  private repository: any = null // it need an interface: "RepositoryInterface"

  constructor(repository: any) {
    this.repository = repository
  }

  async getDatabases(): Promise<Database[]> {
    return await this.repository.getDatabases()
  }

  async getTables(): Promise<Table[]> {
    return await this.repository.getTables()
  }
}


export default Service
