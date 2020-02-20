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
}


export default DriverBridge
