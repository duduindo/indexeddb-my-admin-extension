import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json'
import { GraphQLModule } from '@graphql-modules/core'
import gql from 'graphql-tag'


export const DatabaseModule = new GraphQLModule({
  typeDefs: gql`
    scalar JSON
    scalar JSONObject

    type Table {
      name: String
    }

    type Database {
      tables: [Table]
    }

    type Query {
      database: Database
    }
  `,
  resolvers: {
    JSON: GraphQLJSON,
    JSONObject: GraphQLJSONObject,

    Query: {
      database: () => 'Databaseeee111',
    },

    Database: {
      tables: () => ['Table Databaseee10']
    },

    Table: {
      name: () => 'Table Databaseee1'
    }
  },
});
