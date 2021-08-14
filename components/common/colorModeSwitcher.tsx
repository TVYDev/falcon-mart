import { FC } from 'react';
import { useColorMode, Button } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ColorModeSwitcher: FC = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} size="xs" {...props}>
      {colorMode === 'dark' ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

export default ColorModeSwitcher;
