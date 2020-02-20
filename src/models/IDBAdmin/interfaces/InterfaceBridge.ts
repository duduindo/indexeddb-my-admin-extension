interface InterfaceBridge {
  /*
   * @param $connection connection of database
   *
   * @return promise array DatabaseStruture
   */
  getStructureFromDatabase(): Promise<DatabaseStruture>
}


export default InterfaceBridge
