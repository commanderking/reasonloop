import { ChakraProvider, theme, Box } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="824px" margin="auto" padding="20px" mt={10}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
