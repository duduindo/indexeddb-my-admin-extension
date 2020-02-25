interface IDatabase {
  /*
   * @return void
   */
  close(): Promise<void>

  /*
   * @return void
   */
  deleteDatabase(databasename: string): Promise<void>

  /*
   * @return promise database description
   */
  getDescribeDatabase(): Promise<DatabaseDescription>


  /*
   * @return promise database description
   */
  upgradeDatabase(data: DatabaseStruture): Promise<any>
}


export default IDatabase
