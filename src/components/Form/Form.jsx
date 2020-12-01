import React from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  Select,
  Button,
  Box,
  Flex,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import { ufs } from '../../utils/DataUtils';
import { post } from '../../api';

function Form() {
  const spacingDef = 3;
  const [nome, setNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [idade, setIdade] = React.useState(0);
  const [uf, setUf] = React.useState('');
  const [salario, setSalario] = React.useState(0.0);

  const handleInputChange = (e, setState) => setState(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();

    post({ nome, cpf, idade, uf, salario });

    setNome('');
    setCpf('');
    setIdade(0);
    setUf('');
    setSalario(0.0);
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Text>Insira seus dados</Text>
        <Box my={spacingDef} textAlign="center">
          <form onSubmit={handleSubmit}>
            <FormControl id="nome">
              <FormLabel>Nome</FormLabel>
              <Input
                value={nome}
                onChange={e => handleInputChange(e, setNome)}
              />
            </FormControl>
            <FormControl mt={spacingDef} id="cpf">
              <FormLabel>CPF</FormLabel>
              <Input onChange={e => handleInputChange(e, setCpf)} />
            </FormControl>
            <SimpleGrid mt={spacingDef} columns={2} spacing={spacingDef}>
              <FormControl id="idade">
                <FormLabel>Idade</FormLabel>
                <NumberInput defaultValue={0} min={0} max={150}>
                  <NumberInputField
                    value={idade}
                    onChange={e => handleInputChange(e, setIdade)}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl id="uf">
                <FormLabel>UF</FormLabel>
                <Select value={uf} onChange={e => handleInputChange(e, setUf)}>
                  {ufs.map((uf, index) => (
                    <option key={index} value={uf}>
                      {uf}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </SimpleGrid>
            <FormControl mt={spacingDef} id="salario">
              <FormLabel>Salário</FormLabel>
              <NumberInput defaultValue={0} min={0} precision={2}>
                <NumberInputField
                  value={salario}
                  onChange={e => handleInputChange(e, setSalario)}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <Box mt={spacingDef}>
              <Button type="submit">Avaliar</Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Form;
