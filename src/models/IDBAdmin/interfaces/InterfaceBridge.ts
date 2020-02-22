interface InterfaceBridge {
  /*
   * @return void
   */
  close(): Promise<void>

  /*
   * @return promise array DatabaseStruture
   */
  getStructureFromDatabase(): Promise<DatabaseStruture>

  /*
   * @param tablename table's name
   *
   * @return promise array string
   */
  getColumnNamesFromTable(tablename: string): Promise<string[]>

  /*
   * @param tablename table's name
   *
   * @return promise object
   */
  getContentFromTable(tablename: string): Promise<object>

  /*
   * @param $table name of table
   * @param indexname name of index
   *
   * @return promise object
   */
  getContentFromIndex(table: string, indexname: string): Promise<object>
}


export default InterfaceBridge
