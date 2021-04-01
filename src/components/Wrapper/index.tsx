import { Box } from '@chakra-ui/react';
import { WrapperProps } from './WrapperProps';

export const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <Box
      {...props}
      borderWidth="1px"
      borderRadius="lg"
    >
      { children}
    </Box>
  )
};

export default Wrapper;