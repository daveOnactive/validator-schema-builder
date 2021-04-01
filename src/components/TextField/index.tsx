import { Input } from '@chakra-ui/react';

export const TextField = () => {
  return (
    <Input variant="filled" size='lg' placeholder="Name" focusBorderColor='brand.primary' />
  );
};

export default TextField;