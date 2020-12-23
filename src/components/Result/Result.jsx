import React from "react";

import { Text, Box, Heading, Flex } from "@chakra-ui/react";

const putS = (list) => list.length > 1 && "s";

const Result = ({ nome = "Anônimo", resultado = [], hidden = true }) => (
  <Box hidden={hidden}>
    <Text>Resultado da avaliação</Text>
    <Box>
      <p>
        Olá {nome}, no momento você fazer emprestimo
        {putS(resultado)} na{putS(resultado)} seguinte{putS(resultado)}{" "}
        modalidade
        {putS(resultado)}:
      </p>
    </Box>
    <Flex>
      {resultado.map(({ tipo, taxa }, index) => (
        <Box
          key={index}
          p={6}
          m={2}
          maxWidth="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Heading as="h4" size="md">
            Opção {index + 1}
          </Heading>
          <Box textAlign="left" p={2}>
            <Text>Tipo: {tipo}</Text>
            <Text>Taxa: {taxa}%</Text>
          </Box>
        </Box>
      ))}
    </Flex>
  </Box>
);

export default Result;
