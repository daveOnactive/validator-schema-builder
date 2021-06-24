import { Box, Flex, Button, VStack, Text, Grid } from "@chakra-ui/react";
import { useDrop } from "react-dnd";
import React from "react";
import { AppContext } from "../../Providers";
import { handleOpenDialog } from "../../actions";
import { SchemaValidators } from "../../types";
import { validatorArr } from "../../interfaces";
import { CardWithBtn } from "../../components";

type Item = {
  type: SchemaValidators;
  [key: string]: any;
};

const { useContext } = React;

export const SchemaBuilder = () => {
  const { dispatch, state } = useContext(AppContext);
  const [item, drop] = useDrop({
    accept: "validatorMethod",
    collect: (monitor: any) => ({
      handlerId: monitor.getHandlerId(),
    }),
    drop: (item: Item) => {
      if (state.schemaValue.name === "") {
        alert(
          "Please enter schema value name before you can drop validator methods."
        );
        return;
      }
      dispatch(handleOpenDialog(item.type));
    },
  });
  return (
    <VStack spacing={0} h="100%" ref={drop}>
      <Box h="100%" bg="#232934" w="100%">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {state.schemaValue.validator.length ? (
            state.schemaValue.validator.map((validator: validatorArr) => (
              <CardWithBtn
                title={validator.type}
                onClose={() => null}
                data={{
                  message: validator.message,
                  value: validator.value,
                }}
              />
            ))
          ) : (
            <Text color="gray.500">Drop Validation Method Here</Text>
          )}
        </Grid>
      </Box>
      <Flex justify="flex-end" p="3" w="100%">
        <Button bg="brand.primary" size="md">
          Save
        </Button>
      </Flex>
    </VStack>
  );
};

export default SchemaBuilder;
