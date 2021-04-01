import { CloseButton, Box, Flex, Text } from "@chakra-ui/react";

export const CardWithBtn = () => {
  return (
    <Box
      boxShadow="xl"
      rounded="md"
      m='3'
      borderWidth="1px"
      borderRadius="lg"
    >
      <Flex justify='flex-end'>
        <CloseButton />
      </Flex>
      <Text
        fontSize='lg'
        textAlign='center'
        p='3'
      >Value</Text>
    </Box>
  );
};

export default CardWithBtn;