/*import { openDB, deleteDB, wrap, unwrap } from 'idb'
import { graphql } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'


const typeDefs = `
  type Student {
    id: ID!
    name: String
    age: Int
  }

  type OpenDBRequest {
    name: String
    version: Int
    message: String
  }

  type Transaction {
    mode: String
    message: String
  }

  type Query  {
    greeting: String
    students: [Student]
    db: OpenDBRequest
    transaction: Transaction
  }

  schema {
    query: Query
  }
`

async function getDB() {
  try {
    const db = await openDB('library', 3);

    return {
      name: db.name,
      version: db.version,
      message: '',
    }
  } catch(e) {
    return {
      message: e.message,
    }
  }
}

async function getTransaction() {
  try {
    const db = await openDB('library', 3);
    const transaction = db.transaction('books')

    return {
      mode: transaction.mode,
    }
  } catch(e) {
    return {
      message: e.message,
    }
  }
}

//getTransaction()


const  resolvers = {
  Query : {
    greeting: () => 'Hello GraphQL  From TutorialsPoint !!',
    students: () => {
      return [
        {id: 0, name: 'Opaa', age: 100},
        {id: 1, name: 'fulano', age: 9}
      ]
    },
    db: () => getDB(),
    transaction: () => getTransaction(),
  },

  Student: {
    id: () => 1,
    name: () => 'Estudante',
    age: () => 33
  },

  OpenDBRequest: {
    name: (ctx: any) => ctx.name,
    version: (ctx: any) => ctx.version,
    message: (ctx: any) => ctx.message,
  },

  Transaction: {
    mode: (ctx: any) => ctx.mode,
    message: (ctx: any) => ctx.message,
  }
}


const schema = makeExecutableSchema({ typeDefs, resolvers })


graphql(schema, '{ db { name, version, message }, transaction { mode, message } }').then((response) => {
  console.log(response.data);
});
*/

// import Service from '@/models/IDBAdmin/UseCase/Service'
// import IndexedDBRepository from '@/models/IDBAdmin/Driver/IndexedDBRepository'




// const indexeddb = new IndexedDBRepository()
// const service = new Service(indexeddb)

// service.getContentFromIndex(
//   { name: 'library', version: 4 },
//   { name: 'e-readers' },
//   { name: 'by_title' }
// ).then(e => console.log(e))

// service.getDatabaseNames().then(e => console.log(e))
// service.getStoreNames({ name: 'library', version: 4 }).then(e => console.log(e))
// service.getIndexNames({ name: 'library', version: 4 }, 'e-books').then(e => console.log(e))


// ------------------------------ novo
const tables: DatabaseTableStruture[] = [
  {
    name: 'secao',
    keyPath: 'isbn',
    autoIncrement: false,
    indexes: [
      {
        name: 'por_titulo',
        keyPath: 'titulo',
        unique: true
      },
      {
        name: 'por_autor',
        keyPath: 'ator',
        unique: false
      }
    ]
  },

  {
    name: 'corredores',
    keyPath: 'corredor',
    autoIncrement: true,
    indexes: [
      {
        name: 'por_corredor2',
        keyPath: 'corredor'
      },
      {
        name: 'por_corredorlalala',
        keyPath: 'corredorlalallaaaaa'
      }
    ]
  },

  {
    name: 'livros',
    keyPath: 'isbn',
    autoIncrement: false,
    indexes: []
  }
]

const data: DatabaseStruture = {
  name: 'biblioteca2',
  version: Date.now(),
  tables
}


// import WebSQL from '@/models/Database/drivers/WebSQL'
import IndexedDB from '@/models/Database/drivers/IndexedDB'
import Admin from '@/models/Database/interfaces/Admin'

// const database = openDB('library', 11)
// const drive = new IndexedDB(database)

// const database = IndexedDB.openDatabase('biblioteca2', 1582729579933)

const database = IndexedDB.openDatabase('biblioteca2', 1582729579933)
const drive = new IndexedDB(database)
const admin = new Admin(drive)


;(async function() {

  const result = await admin.getColumnNamesFromTable('corredores')


  console.log(result)

})()
