import { Box, Flex, Button, VStack, Text } from "@chakra-ui/react";

export const SchemaBuilder = () => {
  return (
    <VStack
      spacing={0}
      h='100%'
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