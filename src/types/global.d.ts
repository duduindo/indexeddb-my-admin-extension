declare module 'liquor-tree'
declare module 'vue-json-pretty'
declare module 'json-string-formatter'
declare module '*.vue'
declare module 'idb'

declare enum Choices {
  unique = 'UNIQUE'
}

type DatabaseDescription = {
  name: string,
  version?: any,
}

type DatabaseIndexStruture = {
  name: string,
  keyPath?: string,
  unique?: boolean
}

type DatabaseTableStruture = {
  name: string,
  keyPath?: string,
  autoIncrement?: boolean,
  indexes: Array<DatabaseIndexStruture>,
}

type DatabaseStruture = {
  name: string,
  version?: any,
  tables: Array<DatabaseTableStruture>,
}


// @ts-ignore
var request = indexedDB.open("test", 3);

// @ts-ignore
request.onupgradeneeded = function () {
    // @ts-ignore
    var db = request.result;
    // @ts-ignore
    var store = db.createObjectStore("books", {keyPath: "isbn"});
    store.createIndex("by_title", "title", {unique: true});

    store.put({title: "Quarry Memories", author: "Fred", isbn: 123456});
    store.put({title: "Water Buffaloes", author: "Fred", isbn: 234567});
    store.put({title: "Bedrock Nights", author: "Barney", isbn: 345678});
}




