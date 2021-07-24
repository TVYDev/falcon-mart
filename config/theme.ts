import { extendTheme, ChakraTheme } from '@chakra-ui/react';

const theme = extendTheme<ChakraTheme>({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Raleway, sans-serif',
    body: 'Lato, sans-serif',
  },
});

export default theme;
