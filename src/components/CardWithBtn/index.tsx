import { CloseButton, Box, Flex } from "@chakra-ui/react";

export const CardWithBtn = () => {
  return (
    <Box boxShadow="sm" rounded="md" bg="white">
      <Flex justify='flex-end'>
        <CloseButton />
      </Flex>
      value
    </Box>
  );
};

export default CardWithBtn;