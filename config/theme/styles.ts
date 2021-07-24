import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#D6FFDE', '#131A22')(props),
    },
  }),
};

export default styles;
