interface InterfaceBridge {
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
}


export default InterfaceBridge
