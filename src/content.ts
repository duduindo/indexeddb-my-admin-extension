import { graphql } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

import IndexedDB from '@/models/Database/drivers/IndexedDB'
import IInterfaceBridge from '@/models/Database/interfaces/IInterfaceBridge'
import Admin from '@/models/Database/interfaces/Admin'


const typeDefs = `
  scalar JSON
  scalar JSONObject


  type Table {
    columnNames: JSON
    content: JSON
    isAutoIncrement: JSON
    names: JSON
    rows: JSON
  }

  type Database {
    table(name: String!): Table
  }


  # the schema allows the following query:
  type Query  {
    database(name: String): Database
  }

  schema {
    query: Query
  }
`


async function connectAdmin(name: string, version: number): Promise<any> {
  const database = await IndexedDB.openDatabase(name, version)
  const drive = new IndexedDB(database)
  const admin = new Admin(drive)

  return admin
}


const resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,

  Table: {
    columnNames: async ({admin, name}: any) => JSON.stringify(await admin.getColumnNamesFromTable(name)),
    content: async ({admin, name}: any) => JSON.stringify(await admin.getContentFromTable(name)),
    isAutoIncrement: async ({admin, name}: any) => JSON.stringify(await admin.isTableAutoIncrement(name)),
    names: async ({admin}: any) => JSON.stringify(await admin.getTableNames()),
    rows: async ({admin, name}: any) => JSON.stringify(await admin.getRowsFromTable(name)),
  },

  Database: {
    table: (admin: IInterfaceBridge, { name, value, key }: any) => ({admin, name, value, key}),
  },

  Query: {
    database: async (_: any, { name }: any) => {
      try {
        return await connectAdmin('biblioteca2', 158272957993319)
      } catch (e) {
        throw new Error(e.message);
      }
    }
  },
}


const schema = makeExecutableSchema({ typeDefs, resolvers })


const query = `
  query {
    database(name: "opaopa") {
      table(name: "corredores") {
        columnNames,
        content,
        names,
        rows,
        isAutoIncrement
      }
    }
  }
`

graphql(schema, query).then((response) => {
  console.log(response.data);
});
