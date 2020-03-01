import { graphql } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

import IndexedDB from '@/models/Database/drivers/IndexedDB'
import IInterfaceBridge from '@/models/Database/interfaces/IInterfaceBridge'
import Admin from '@/models/Database/interfaces/Admin'


const typeDefs = `
  scalar JSON
  scalar JSONObject

  type Index {
    content: JSON
    choice: JSON
    names: JSON
    rows: JSON
  }

  type Table {
    columnNames: JSON
    content: JSON
    index(indexname: String!): Index
    isAutoIncrement: JSON
    names: JSON
    rows: JSON
  }

  type Database {
    table(tablename: String!): Table
  }


  # the schema allows the following query:
  type Query  {
    database(name: String, version: String!): Database
  }

  # this schema allows the following mutation:
  type Mutation {
    addContentToTable(name: String!, version: String!, tablename: String!, value: JSONObject!): JSON
    clearContentFromTable(name: String!, version: String!, tablename: String!): JSON
    deleteRow(name: String!, version: String!, tablename: String!, key: String!): JSON
    putContentToTable(name: String!, version: String!, tablename: String!, value: JSONObject!, key: String): JSON
  }

  schema {
    query: Query
    mutation: Mutation
  }
`


async function connectAdmin(name: string, version: number): Promise<IInterfaceBridge> {
  const database = await IndexedDB.openDatabase(name, version)
  const drive = new IndexedDB(database)
  const admin = new Admin(drive)

  return admin
}


const resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,

  Index: {
    content: async ({admin, tablename, indexname}: any) => JSON.stringify(await admin.getContentFromIndex(tablename, indexname)),
    choice: async ({admin, tablename, indexname}: any) => JSON.stringify(await admin.getIndexChoice(tablename, indexname)),
    names: async ({admin, tablename}: any) => JSON.stringify(await admin.getIndexNames(tablename)),
    rows: async ({admin, tablename, indexname}: any) => JSON.stringify(await admin.getRowsFromIndex(tablename, indexname)),
  },

  Table: {
    columnNames: async ({admin, tablename}: any) => JSON.stringify(await admin.getColumnNamesFromTable(tablename)),
    content: async ({admin, tablename}: any) => JSON.stringify(await admin.getContentFromTable(tablename)),
    index: ({admin, tablename}: any, { indexname }: any) => ({admin, tablename, indexname}),
    isAutoIncrement: async ({admin, tablename}: any) => JSON.stringify(await admin.isTableAutoIncrement(tablename)),
    names: async ({admin}: any) => JSON.stringify(await admin.getTableNames()),
    rows: async ({admin, tablename}: any) => JSON.stringify(await admin.getRowsFromTable(tablename)),
  },

  Database: {
    table: (admin: IInterfaceBridge, { tablename, value, key }: any) => ({admin, tablename, value, key}),
  },


  Query: {
    database: async (_: any, { name, version }: any) => {
      try {
        return await connectAdmin(name, version)
      } catch (e) {
        throw new Error(e.message);
      }
    }
  },

  Mutation: {
    // Table
    // =========================================================
    addContentToTable: async (_: any, { name, version, tablename, value }: any) => {
      try {
        const admin: IInterfaceBridge = await connectAdmin(name, version)
        const updated = await admin.addContentToTable(tablename, value)

        return JSON.stringify(updated)
      } catch (e) {
        return JSON.stringify(e)
      }
    },

    clearContentFromTable: async (_: any, { name, version, tablename }: any) => {
      try {
        const admin: IInterfaceBridge = await connectAdmin(name, version)
        const cleared = await admin.clearContentFromTable(tablename)

        return JSON.stringify(cleared)
      } catch (e) {
        return JSON.stringify(e)
      }
    },

    deleteRow: async (_: any, { name, version, tablename, key }: any) => {
      try {
        const admin: IInterfaceBridge = await connectAdmin(name, version)
        const deleted = await admin.deleteRow(tablename, key)

        return JSON.stringify(deleted)
      } catch (e) {
        return JSON.stringify(e)
      }
    },

    putContentToTable: async (_: any, { name, version, tablename, value, key }: any) => {
      try {
        const admin: IInterfaceBridge = await connectAdmin(name, version)
        const updated = await admin.putContentToTable(tablename, value, key)

        return JSON.stringify(updated)
      } catch (e) {
        return JSON.stringify(e)
      }
    },


    // Index
    // =========================================================

  },
}


const schema = makeExecutableSchema({ typeDefs, resolvers })


// const query = `
//   query {
//     database(name: "biblioteca2", version: "158272957993319") {
//       table(name: "corredores") {
//         columnNames,
//         content,
//         names,
//         rows,
//         isAutoIncrement
//       }
//     }
//   }
// `

// const query = `
//   mutation {
//     addContentToTable(name: "biblioteca2", version: "158272957993319", tablename: "corredores", value: {corredor: "A8"})
//   }
// `

const query = `
  query {
    database(name: "biblioteca2", version: "158272957993319") {
      table(tablename: "corredores") {
        index(indexname: "por_corredor") {
          content
          choice
          names
          rows
        }
      }
    }
  }
`


graphql(schema, query)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.warn('graphql error: ', error);
  })
