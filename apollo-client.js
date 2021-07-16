import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.deutschebahn.com//1bahnql/v1/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = "YOU_RECEIVED_THIS_PER_EMAIL_REPLACE_ME"

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

