interface ITable {
  /*
   * @param $tablename name of table
   * @param $value value to table
   *
   * @return promise any
   */
  addContentToTable(tablename: string, value: any): Promise<boolean>

  /*
   * @param $tablename name of table
   *
   * @return promise any
   */
  clearContentFromTable(tablename: string): Promise<boolean>

  /*
   * @param $tablename name of table
   * @param $key key of the record you want to delete
   *
   * @return promise any
   */
  deleteRow(tablename: string, key: any): Promise<boolean>

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
   *
   * @return promise number
   */
  getRowsFromTable(tablename: string): Promise<number>

  /*
   * @return promise array table names
   */
  getTableNames(): Promise<string[]>

  /*
   * @param $tablename name of table
   *
   * @return promise boolean
   */
  isTableAutoIncrement(tablename: string): Promise<boolean>

  /*
   * @param $tablename name of table
   * @param $value value to table
   * @param $key key of the record you want to update
   *
   * @return promise any
   */
  putContentToTable(tablename: string, value: any, key?: any): Promise<boolean>
}


export default ITable
