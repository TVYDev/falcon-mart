import { FC } from 'react';
import { Input } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface EmailInputProps extends UseFormRegisterReturn {
  placeholder?: string;
}

const EmailInput: FC<EmailInputProps> = ({ children: _, ...attributes }) => {
  return <Input type="email" variant="filled" size="sm" {...attributes} />;
};

EmailInput.defaultProps = {
  placeholder: 'Email',
};

export default EmailInput;
