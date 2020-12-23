import { theme, ChakraProvider } from '@chakra-ui/react';
// import theme from './theme/CustomTheme';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <AppContainer />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
