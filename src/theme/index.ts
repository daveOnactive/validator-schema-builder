import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark"
  },
  colors: {
    brand: {
      primary: '#2493FA'
    }
  }
});