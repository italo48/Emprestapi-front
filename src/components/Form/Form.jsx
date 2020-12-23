import React from "react";

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
} from "@chakra-ui/react";

import { ufs } from "../../utils/DataUtils";

const Form = ({
  nome,
  setNome,
  idade,
  setIdade,
  cpf,
  setCpf,
  uf,
  setUf,
  salario,
  setSalario,
  onChange,
  onSubmit,
  spacingDef,
}) => (
  <Flex width="full" align="center" justifyContent="center">
    <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
      <Text>Insira seus dados</Text>
      <Box my={spacingDef} textAlign="center">
        <form onSubmit={onSubmit}>
          <FormControl id="nome">
            <FormLabel>Nome</FormLabel>
            <Input value={nome} onChange={(e) => onChange(e, setNome)} />
          </FormControl>
          <FormControl mt={spacingDef} id="cpf">
            <FormLabel>CPF</FormLabel>
            <Input onChange={(e) => onChange(e, setCpf)} />
          </FormControl>
          <SimpleGrid mt={spacingDef} columns={2} spacing={spacingDef}>
            <FormControl id="idade">
              <FormLabel>Idade</FormLabel>
              <NumberInput defaultValue={0} min={0} max={150}>
                <NumberInputField value={idade} onChange={(e) => onChange(e, setIdade)} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl id="uf">
              <FormLabel>UF</FormLabel>
              <Select value={uf} onChange={(e) => onChange(e, setUf)}>
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
              <NumberInputField value={salario} onChange={(e) => onChange(e, setSalario)} />
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

export default Form;
