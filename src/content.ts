import { graphql } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';


const typeDefs = `
  scalar JSON
  scalar JSONObject


  type Query  {
    greeting: String
    content: JSON
  }

  schema {
    query: Query
  }
`


const  resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,

  Query : {
    greeting: () => 'Hello GraphQL  From TutorialsPoint !!',
    content: () => JSON.stringify('{ "prop": 10 }'),
  },
}

const schema = makeExecutableSchema({ typeDefs, resolvers })


graphql(schema, '{ greeting, content }').then((response) => {
  console.log(response.data);
});
