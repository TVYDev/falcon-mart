import '@fontsource/raleway/600.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/hanuman/400.css';
import '@fontsource/hanuman/700.css';
import '@fontsource/nokora/700.css';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';

import theme from '@/config/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default appWithTranslation(MyApp);
