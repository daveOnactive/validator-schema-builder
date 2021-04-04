import { Box, Flex, Button, VStack, Text } from "@chakra-ui/react";
import { useDrop } from 'react-dnd';
import React from 'react';
import { AppContext } from '../../Providers';
import { handleOpenDialog } from '../../actions';
import { SchemaValidators } from '../../types';

type Item = {
  type: SchemaValidators,
  [key: string]: any
}

const { useContext } = React;

export const SchemaBuilder = () => {
  const { dispatch } = useContext(AppContext);
  const [item, drop] = useDrop({
    accept: 'validatorMethod',
    collect: (monitor: any) => ({
      handlerId: monitor.getHandlerId(),
    }),
    drop: (item: Item) => {
      dispatch(handleOpenDialog(item.type))
    }
  });
  return (
    <VStack
      spacing={0}
      h='100%'
      ref={drop}
    >
      <Box
        h='100%'
        bg='#232934'
        w='100%'
      >
        <Box
          textAlign='center'
          fontSize='lg'
          display='flex'
          justifyContent='center'
          alignItems='center'
          h='100%'
        ><Text color='gray.500'>Drop Validation Method Here</Text></Box>
      </Box>
      <Flex justify='flex-end' p='3' w='100%'>
        <Button bg="brand.primary" size="md">
          Save
         </Button>
      </Flex>
    </VStack>
  );
};

export default SchemaBuilder;