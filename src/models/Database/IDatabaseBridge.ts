interface IDatabaseBridge {

  // Database
  // =========================================================
  /**
   * @param $databasename database's name
   */
  deleteDatabase(databasename: string): Promise<boolean>

  getDatabases(): Promise<object[]>

  getStructureFromDatabase(): Promise<any>


  // Table
  // =========================================================
  /**
   * @param $databasename table's name
   * @param $value value
   */
  addContentToTable(tablename: string, value: any): Promise<boolean>

  /**
   * @param $databasename table's name
   */
  clearContentFromTable(tablename: string): Promise<boolean>

  /**
   * @param $databasename table's name
   * @param $key key
   */
  deleteRow(tablename: string, key: any): Promise<boolean>

  /**
   * @param $databasename table's name
   */
  getColumnNamesFromTable(tablename: string): Promise<string[]>

  /**
   * @param $databasename table's name
   */
  getContentFromTable(tablename: string): Promise<object>

  /**
   * @param $databasename table's name
   */
  getRowsFromTable(tablename: string): Promise<number>

  getTableNames(): Promise<string[]>

  /**
   * @param $databasename table's name
   */
  isTableAutoIncrement(tablename: string): Promise<boolean>

  /**
   * @param $databasename table's name
   * @param $value value
   * @param $key key
   */
  putContentToTable(tablename: string, value: any, key?: any): Promise<boolean>


  // Index
  // =========================================================
  /**
   * @param $tablename name of table
   * @param indexname name of index
   */
  getContentFromIndex(tablename: string, indexname: string): Promise<object>

  /**
   * @param $tablename name of table
   * @param indexname name of index
   */
  getIndexChoice(tablename: string, indexname: string): Promise<string>

  /**
   * @param $tablename name of table
   */
  getIndexNames(tablename: string): Promise<string[]>

  /**
   * @param $tablename name of table
   * @param indexname name of index
   */
  getRowsFromIndex(tablename: string, indexname: string): Promise<number>
}


export default IDatabaseBridge
