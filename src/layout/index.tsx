import { Box, Text } from "@chakra-ui/layout"

const Layout = () => {
  return (
    <Box
      w='100%'
      h='70px'
      boxShadow="lg"
      mb='4'
      bg='brand.primary'
    >
      <Text fontSize="4xl" textAlign='center'>JS Object Validator Schema Builder</Text>
    </Box>
  )
};

export default Layout;