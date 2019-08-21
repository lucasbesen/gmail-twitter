import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createHttpLink({
  uri: 'https://lucasbesen-twitter.herokuapp.com/graphql',
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default apolloClient;
