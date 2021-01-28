import { ApolloServer } from "apollo-server-micro";
import typeDefs from "../../graphql/typeDefs";
import resolvers from "../../graphql/resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      "schema.polling.enable": false,
      "request.credentials": "same-origin",
      "prettier.useTabs": true,
    },
  },
  introspection: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({
  path: "/api/graphql",
  disableHealthCheck: true,
});
