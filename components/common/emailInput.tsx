import { forwardRef } from 'react';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import {
  FieldError,
  FieldErrors,
  UseFormRegisterReturn,
} from 'react-hook-form';

interface EmailInputProps extends UseFormRegisterReturn {
  placeholder?: string;
  errors: FieldErrors;
}

const EmailInput = forwardRef<typeof Input, EmailInputProps>(
  ({ children: _, errors, ...attributes }, _ref) => {
    const fieldError: FieldError = errors[attributes.name];
    return (
      <FormControl isInvalid={!!fieldError} id={attributes.name}>
        <Input type="email" variant="filled" size="sm" {...attributes} />
        <FormErrorMessage>{fieldError?.message}</FormErrorMessage>
      </FormControl>
    );
  }
);

EmailInput.displayName = 'EmailInput';
EmailInput.defaultProps = {
  placeholder: 'Email',
};

export default EmailInput;
