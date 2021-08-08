import { mode } from '@chakra-ui/theme-tools';

const Button = {
  baseStyle: {
    borderRadius: '10px',
  },
  variants: {
    solid: (props: any) => ({
      bg: mode('#131A22', '#88FFA2')(props),
      color: mode('white', '#131A22')(props),
      _hover: {
        color: mode('#131A22', 'white')(props),
      },
    }),
    outline: (props: any) => ({
      borderColor: mode('#131A22', 'white')(props),
    }),
  },
};

export default Button;
