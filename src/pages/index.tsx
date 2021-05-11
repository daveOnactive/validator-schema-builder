/** @format */

import { Card, Wrapper, CardWithBtn, TextField } from "../components";
import methods from "../data/methods";
import { Box, Flex, VStack, Button, Text } from "@chakra-ui/react";
import {
  DisplayCode,
  SchemaBuilder,
  SchemaValues,
  ValidatorMethod,
  AddValidatorMethod,
  SchemaValueName,
} from "../features";
import { SchemaValidators } from "../types";
import { AppContext } from "../Providers";
import { useContext } from "react";

const MainPage = () => {
  const { state } = useContext(AppContext);
  return (
    <Box minH="100vh" w="100%" p="2">
      <Flex minH="90vh">
        <Wrapper w="80%" mx="2" p="3">
          <VStack spacing={4} h="100%">
            <Card h="30%">
              <SchemaValues />
            </Card>
            <SchemaValueName />
            <Card
              // mt='3'
              h="100%"
            >
              <SchemaBuilder />
            </Card>
          </VStack>
        </Wrapper>
        <Wrapper w="50%" mx="2">
          <Text textAlign="center" fontSize="xl" p="3">
            Validation Methods
          </Text>
          {state.validatorMethods.map(
            (method: SchemaValidators, index: number) => (
              <ValidatorMethod method={method} key={index} />
            )
          )}
        </Wrapper>
        <Wrapper w="50%" mx="2" p="3">
          <DisplayCode />
        </Wrapper>
      </Flex>
      <AddValidatorMethod />
    </Box>
  );
};

export default MainPage;
