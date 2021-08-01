import { forwardRef } from 'react';
import { Input } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface EmailInputProps extends UseFormRegisterReturn {
  placeholder?: string;
}

const EmailInput = forwardRef<typeof Input, EmailInputProps>(
  ({ children: _, ...attributes }, _ref) => {
    return <Input type="email" variant="filled" size="sm" {...attributes} />;
  }
);

EmailInput.displayName = 'EmailInput';
EmailInput.defaultProps = {
  placeholder: 'Email',
};

export default EmailInput;
