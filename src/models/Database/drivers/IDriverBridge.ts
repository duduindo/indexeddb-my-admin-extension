interface IDriverBridge {
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
   * @return promise array table names
   */
  getTableNames(): Promise<string[]>

  /*
   * @param $tablename name of table
   *
   * @return promise array index names
   */
  getIndexNames(tablename: string): Promise<string[]>

  /*
   * @param $tablename name of table
   *
   * @return promise array column names
   */
  getColumnNamesFromTable(tablename: string): Promise<string[]>

  /*
   * @param $tablename name of table
   *
   * @return promise object
   */
  getContentFromTable(tablename: string): Promise<object>

  /*
   * @param $tablename name of table
   * @param $value value to table
   *
   * @return promise any
   */
  addContentToTable(tablename: string, value: any): Promise<any>

  /*
   * @param $tablename name of table
   * @param $value value to table
   * @param $key key of the record you want to update
   *
   * @return promise any
   */
  putContentToTable(tablename: string, value: any, key?: any): Promise<any>

  /*
   * @param $tablename name of table
   * @param $indexname name of index
   *
   * @return promise object
   */
  getContentFromIndex(tablename: string, indexname: string): Promise<object>

  /*
   * @param $tablename name of table
   * @param $indexname name of index
   *
   * @return promise string
   */
  getIndexChoice(tablename: string, indexname: string): Promise<string | null>

  /*
   * @param $tablename name of table
   *
   * @return promise boolean
   */
  isTableAutoIncrement(tablename: string): Promise<boolean>
}


export default IDriverBridge
