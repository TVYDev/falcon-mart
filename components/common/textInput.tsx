import { forwardRef } from 'react';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import {
  FieldError,
  FieldErrors,
  UseFormRegisterReturn,
} from 'react-hook-form';

interface TextInputProps extends UseFormRegisterReturn {
  placeholder?: string;
  errors: FieldErrors;
  type: 'text' | 'email';
}

const TextInput = forwardRef<typeof Input, TextInputProps>(
  ({ children: _, errors, ...attributes }, _ref) => {
    const fieldError: FieldError = errors[attributes.name];

    return (
      <FormControl isInvalid={!!fieldError} id={attributes.name}>
        <Input variant="filled" size="sm" {...attributes} />
        <FormErrorMessage>{fieldError?.message}</FormErrorMessage>
      </FormControl>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
