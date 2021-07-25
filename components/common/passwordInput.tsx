import { FC, useState } from 'react';
import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const PasswordInput: FC = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="sm">
      <Input
        pr={8}
        type={show ? 'text' : 'password'}
        placeholder="Password"
        variant="filled"
      />
      <InputRightElement width={8}>
        <Button variant="ghost" h={7} size="xs" onClick={handleClick}>
          {show ? <FaEyeSlash /> : <FaEye />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
