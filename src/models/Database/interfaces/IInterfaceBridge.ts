interface InterfaceBridge {

  // Database
  // =========================================================
  /*
   * @param $databasename database's name
   *
   * @return DatabaseAdminResponse
   */
  deleteDatabase(databasename: string): Promise<DatabaseAdminResponse>

  /*
   * @return DatabaseAdminResponse
   */
  getDatabases(): Promise<DatabaseAdminResponse>

  /*
   * @return DatabaseAdminResponse
   */
  getStructureFromDatabase(): Promise<DatabaseAdminResponse>


  // Table
  // =========================================================
  /*
   * @param $databasename table's name
   * @param $value value
   *
   * @return DatabaseAdminResponse
   */
  addContentToTable(tablename: string, value: any): Promise<DatabaseAdminResponse>

  /*
   * @param $databasename table's name
   *
   * @return DatabaseAdminResponse
   */
  clearContentFromTable(tablename: string): Promise<DatabaseAdminResponse>

  /*
   * @param $databasename table's name
   * @param $key key
   *
   * @return DatabaseAdminResponse
   */
  deleteRow(tablename: string, key: any): Promise<DatabaseAdminResponse>

  /*
   * @param $databasename table's name
   *
   * @return DatabaseAdminResponse
   */
  getColumnNamesFromTable(tablename: string): Promise<DatabaseAdminResponse>

  /*
   * @param $databasename table's name
   *
   * @return DatabaseAdminResponse
   */
  getContentFromTable(tablename: string): Promise<DatabaseAdminResponse>

  /*
   * @param $databasename table's name
   *
   * @return DatabaseAdminResponse
   */
  getRowsFromTable(tablename: string): Promise<DatabaseAdminResponse>

  /*
   * @return DatabaseAdminResponse
   */
  getTableNames(): Promise<DatabaseAdminResponse>

  /*
   * @param $databasename table's name
   *
   * @return DatabaseAdminResponse
   */
  isTableAutoIncrement(tablename: string): Promise<DatabaseAdminResponse>

  /*
   * @param $databasename table's name
   * @param $value value
   * @param $key key
   *
   * @return DatabaseAdminResponse
   */
  putContentToTable(tablename: string, value: any, key?: any): Promise<DatabaseAdminResponse>


  // Index
  // =========================================================
  /*
   * @param $tablename name of table
   * @param indexname name of index
   *
   * @return DatabaseAdminResponse
   */
  getContentFromIndex(tablename: string, indexname: string): Promise<DatabaseAdminResponse>

  /*
   * @param $tablename name of table
   * @param indexname name of index
   *
   * @return DatabaseAdminResponse
   */
  getIndexChoice(tablename: string, indexname: string): Promise<DatabaseAdminResponse>

  /*
   * @param $tablename name of table
   *
   * @return DatabaseAdminResponse
   */
  getIndexNames(tablename: string): Promise<DatabaseAdminResponse>

  /*
   * @param $tablename name of table
   * @param indexname name of index
   *
   * @return DatabaseAdminResponse
   */
  getRowsFromIndex(tablename: string, indexname: string): Promise<DatabaseAdminResponse>
}


export default InterfaceBridge
