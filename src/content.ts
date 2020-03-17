import { graphql } from 'graphql'
import { makeExecutableSchema, mergeSchemas } from 'graphql-tools'
import { DatabaseModule } from '@/controllers/databaseModule'
import { StorageModule } from '@/controllers/storageModule'


const databaseSchema = makeExecutableSchema(DatabaseModule)
const storageSchema = makeExecutableSchema(StorageModule)

const schema = mergeSchemas({
  schemas: [
    databaseSchema,
    storageSchema
  ],
});


const query = `
  query {
    database {
      tables {
        name
      }
    }

    storage {
      tables {
        name
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

