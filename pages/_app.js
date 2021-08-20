import { ChakraProvider, theme, Box } from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_REDIRECT_URI}
    >
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Box maxWidth="1048px" margin="auto" padding="20px" mt={10}>
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </ApolloProvider>
    </Auth0Provider>
  );
}

export default MyApp;
