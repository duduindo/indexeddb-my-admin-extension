interface DriverBridge {
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
}


export default DriverBridge
