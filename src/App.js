import React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Heading,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

function App({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="10vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading>Emprestapi</Heading>
            {children}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
