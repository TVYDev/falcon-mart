import { extendTheme, ChakraTheme } from '@chakra-ui/react';

import styles from '@/config/theme/styles';
import config from '@/config/theme/config';
import fonts from '@/config/theme/typography/fonts';
import Input from '@/config/theme/components/input';
import Button from '@/config/theme/components/button';

const theme = extendTheme<ChakraTheme>({
  config,
  styles,
  fonts,
  components: { Button, Input },
});

export default theme;
