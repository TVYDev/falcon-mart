import { mode } from '@chakra-ui/theme-tools';

const Input = {
  sizes: {
    sm: {
      field: {
        borderRadius: '10px',
      },
    },
  },
  variants: {
    filled: (props: any) => ({
      field: {
        bg: mode('white', 'whiteAlpha.50')(props),
        color: mode('#131A22', 'white')(props),
        _hover: {
          bg: mode('gray.50', 'whiteAlpha.100')(props),
        },
      },
    }),
  },
};

export default Input;
