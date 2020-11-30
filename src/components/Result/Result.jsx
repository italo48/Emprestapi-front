import React from 'react';

import { Text, Box } from '@chakra-ui/react';

const Result = ({ nome = 'Anônimo', resultado = [] }) => (
  <>
    <Text>Resultado da avaliação</Text>
    <Box>
      <p>
        Olá {nome}, no momento você fazer emprestimos nas seqguintes
        modalidades:
      </p>
    </Box>
  </>
);

export default Result;
