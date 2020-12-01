import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Heading,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Form from './components/Form';
import Result from './components/Result';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="10vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading>Emprestapi</Heading>
            <Form />
            <Result />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
