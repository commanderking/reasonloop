import { ChakraProvider, theme, Box } from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Box maxWidth="1048px" margin="auto" padding="20px" mt={10}>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
