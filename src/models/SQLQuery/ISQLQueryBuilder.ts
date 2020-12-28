interface ISQLQueryBuilder {


    // public function select(string $table, array $fields): SQLQueryBuilder;

    // public function where(string $field, string $value, string $operator = '='): SQLQueryBuilder;

    // public function limit(int $start, int $offset): SQLQueryBuilder;

    // // +100 other SQL syntax methods...

    // public function getSQL(): string;

  selectDatabase(database: string, version?: number): ISQLQueryBuilder

}


class Opa {

  public getOpa() {}
}
