import { ApolloServer, gql } from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
}).catch(error => console.log(`something went wrong, ${error}`));