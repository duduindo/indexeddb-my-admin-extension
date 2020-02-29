import { graphql } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import IndexedDB from '@/models/Database/drivers/IndexedDB'
import Admin from '@/models/Database/interfaces/Admin'


const typeDefs = `
  scalar JSON
  scalar JSONObject

  type Query  {
    greeting: String
    content: JSON
    getDatabases(name: String!, version: String!, tablename: String!): JSON
  }

  schema {
    query: Query
  }
`


const  resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,

  Query: {
    greeting: () => 'Hello GraphQL  From TutorialsPoint !!',
    content: () => JSON.stringify('{ "prop": 10 }'),

    // @ts-ignore
    getDatabases: async (obj, args, context, info) => {
      const database = IndexedDB.openDatabase(args.name, args.version)
      const drive = new IndexedDB(database)
      const admin = new Admin(drive)
      const response = await admin.getColumnNamesFromTable(args.tablename)

      return JSON.stringify(response)
    }
  },

}

const schema = makeExecutableSchema({ typeDefs, resolvers })


graphql(schema, 'query { greeting, content, getDatabases(name: "biblioteca2", version: "1582729579933", tablename: "corredores") }').then((response) => {
  console.log(response.data);
});
