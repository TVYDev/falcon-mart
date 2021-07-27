import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';

import EmailInput from '@/components/common/emailInput';
import PasswordInput from '@/components/common/passwordInput';

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) =>
    alert(JSON.stringify(data));

  return (
    <Container maxW={450} px={10} mt={5}>
      <Box border="1px" borderRadius="10px" p={5}>
        <Heading as="h1" mb={3} size="md">
          Sign in
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={6}>
            <EmailInput {...register('email')} />
            <PasswordInput {...register('password')} />
            <Button type="submit" size="sm">
              Sign in
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
