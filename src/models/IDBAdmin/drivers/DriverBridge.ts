interface DriverBridge {
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
   * @param $table name of table
   *
   * @return promise array index names
   */
  getIndexNames(table: string): Promise<string[]>

  /*
   * @param $table name of table
   *
   * @return promise array column names
   */
  getColumnNamesFromTable(table: string): Promise<string[]>

  /*
   * @param $table name of table
   *
   * @return promise object
   */
  getContentFromTable(table: string): Promise<object>

  /*
   * @param $table name of table
   * @param $value value to table
   *
   * @return promise any
   */
  addContentToTable(table: string, value: any): Promise<any>

  /*
   * @param $table name of table
   * @param $indexname name of index
   *
   * @return promise object
   */
  getContentFromIndex(table: string, indexname: string): Promise<object>

  /*
   * @param $table name of table
   * @param $indexname name of index
   *
   * @return promise string
   */
  getIndexChoice(table: string, indexname: string): Promise<string | null>

  /*
   * @param $table name of table
   *
   * @return promise boolean
   */
  isTableAutoIncrement(table: string): Promise<boolean>
}


export default DriverBridge
