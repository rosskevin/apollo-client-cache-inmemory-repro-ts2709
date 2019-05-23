import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  // link: ...,
  cache: new InMemoryCache({
    freezeResults: true // new
  }),
  assumeImmutableResults: true // new
});
