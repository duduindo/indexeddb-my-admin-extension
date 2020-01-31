import { openDB, deleteDB, wrap, unwrap } from 'idb'
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
