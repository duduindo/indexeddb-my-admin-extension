interface IDatabase {
  /*
   * @return void
   */
  close(): Promise<void>

  /*
   * @return void
   */
  deleteDatabase(databasename: string): Promise<boolean>

  /*
   * @return promise database description
   */
  getDescribeDatabase(): Promise<DatabaseDescription>
}


export default IDatabase
