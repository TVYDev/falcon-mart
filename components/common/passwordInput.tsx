import { FC, useState } from 'react';
import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { UseFormRegisterReturn } from 'react-hook-form';

interface PasswordInputProps extends UseFormRegisterReturn {
  placeholder?: string;
}

const PasswordInput: FC<PasswordInputProps> = ({
  children: _,
  ...attributes
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="sm">
      <Input
        pr={8}
        type={show ? 'text' : 'password'}
        variant="filled"
        {...attributes}
      />
      <InputRightElement width={8}>
        <Button variant="ghost" h={7} size="xs" onClick={handleClick}>
          {show ? <FaEye /> : <FaEyeSlash />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

PasswordInput.defaultProps = {
  placeholder: 'Password',
};

export default PasswordInput;
