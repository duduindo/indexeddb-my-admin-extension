interface IIndex {
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
   * @return promise array index names
   */
  getIndexNames(tablename: string): Promise<string[]>
}


export default IIndex
