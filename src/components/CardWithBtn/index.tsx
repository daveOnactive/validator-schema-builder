import { CloseButton, Box, Flex, Text } from "@chakra-ui/react";
import CardWithBtnProps from "./CardWithBtnProps";

export const CardWithBtn = ({
  title,
  onClose,
  data,
  ...props
}: CardWithBtnProps) => {
  return (
    <Box
      {...props}
      boxShadow="xl"
      rounded="md"
      m="3"
      borderWidth="1px"
      borderRadius="lg"
    >
      <Flex justify="flex-end">
        <CloseButton onClick={onClose} />
      </Flex>
      <Text fontSize="lg" textAlign="center" p="3">
        {title}
      </Text>
      {data && (
        <>
          <Text fontSize="lg" textAlign="center" p="3">
            <b>Message: </b>
            {data.message}
          </Text>
          <Text fontSize="lg" textAlign="center" p="3">
            <b>Value: </b>
            {data.value}
          </Text>
        </>
      )}
    </Box>
  );
};

export default CardWithBtn;
