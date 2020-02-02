class Databases {
  constructor(private list: DatabaseType[]) {}

  getAll(): DatabaseType[] {
    return this.list
  }

  find(name: string): DatabaseType[] {
    // return this.list.filter(database => {
    //   // const database.toLowerCase().search(name.toLowerCase()) > -1
    //   if (database.name.search(name) || )

    // })

    return this.list.filter((database: DatabaseType) => {
      return true
    })
  }
}

export default Databases
