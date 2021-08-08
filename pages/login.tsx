import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Link,
  Flex,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import EmailInput from '@/components/common/emailInput';
import PasswordInput from '@/components/common/passwordInput';
import SimpleLayout from '@/components/layouts/simpleLayout';

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
    formState: { errors, isValid },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) =>
    alert(JSON.stringify(data));

  return (
    <SimpleLayout>
      <Box border="1px" borderRadius="10px" p={5}>
        <Heading as="h1" mb={3} size="md">
          Sign in
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Stack spacing={6}>
            <EmailInput {...register('email')} errors={errors} />
            <Flex direction="column" alignItems="end">
              <PasswordInput {...register('password')} errors={errors} />
              <Link mt={1} href="#" fontSize="xs">
                Forgot password?
              </Link>
            </Flex>
            <Button type="submit" size="sm" isFullWidth isDisabled={!isValid}>
              Sign in
            </Button>
          </Stack>
        </form>
      </Box>
      <Text textAlign="center" fontSize="xs" mt={6} mb={3}>
        Don&apos;t have an account?
      </Text>
      <Button type="button" size="sm" variant="outline" isFullWidth>
        Create account
      </Button>
    </SimpleLayout>
  );
};

export default Login;
