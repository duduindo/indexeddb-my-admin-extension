import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json'
import { GraphQLModule } from '@graphql-modules/core'
import gql from 'graphql-tag'


export const StorageModule = new GraphQLModule({
  typeDefs: gql`
    scalar JSON
    scalar JSONObject

    type Table {
      name: String
    }

    type Storage {
      tables: [Table]
    }

    type Query {
      storage: Storage
    }
  `,
  resolvers: {
    JSON: GraphQLJSON,
    JSONObject: GraphQLJSONObject,

    Query: {
      storage: () => 'Storageee',
    },

    Storage: {
      tables: () => ['Table Storageee11']
    },

    Table: {
      name: () => 'Table Storageee1'
    }
  },
});
