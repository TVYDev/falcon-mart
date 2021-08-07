import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import EmailInput from '@/components/common/emailInput';
import PasswordInput from '@/components/common/passwordInput';

interface LoginFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email is invalid')
    .required('Please enter an email'),
  password: yup.string().required('Please enter a password'),
});

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) =>
    alert(JSON.stringify(data));

  return (
    <Container maxW={450} px={10} mt={5}>
      <Box border="1px" borderRadius="10px" p={5}>
        <Heading as="h1" mb={3} size="md">
          Sign in
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Stack spacing={6}>
            <FormControl isInvalid={!!errors.email} id="email">
              <EmailInput {...register('email')} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password} id="password">
              <PasswordInput {...register('password')} />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
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
