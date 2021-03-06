import { useState, forwardRef } from 'react';
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import {
  UseFormRegisterReturn,
  FieldErrors,
  FieldError,
} from 'react-hook-form';
import { useTranslation } from 'next-i18next';

interface PasswordInputProps extends UseFormRegisterReturn {
  placeholder?: string;
  errors: FieldErrors;
}

const PasswordInput = forwardRef<typeof Input, PasswordInputProps>(
  ({ children: _, errors, ...attributes }, _ref) => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    attributes.placeholder =
      attributes.placeholder ?? t('common:input.password.placeholder');

    const fieldError: FieldError = errors[attributes.name];

    return (
      <FormControl isInvalid={!!fieldError} id={attributes.name}>
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
        <FormErrorMessage>{fieldError?.message}</FormErrorMessage>
      </FormControl>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
