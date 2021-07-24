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

type LoginInputs = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

  return (
    <Container maxW={450} px={10} mt={5}>
      <Box border="1px" borderRadius="10px" p={5}>
        <Heading as="h1" mb={3} size="md">
          Sign in
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={6}>
            <Input
              placeholder="Email"
              type="email"
              variant="filled"
              size="sm"
            />
            <Input
              placeholder="Password"
              type="password"
              variant="filled"
              size="sm"
            />
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
