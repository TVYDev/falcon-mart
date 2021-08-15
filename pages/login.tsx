import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Link,
  Flex,
} from '@chakra-ui/react';
import type { NextPage, GetStaticProps } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as yup from 'yup';

import EmailInput from '@/components/common/emailInput';
import PasswordInput from '@/components/common/passwordInput';
import SimpleLayout from '@/components/layouts/simpleLayout';

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('common:input.email.invalid.email'))
      .required(t('common:input.email.invalid.required')),
    password: yup
      .string()
      .required(t('common:input.password.invalid.required')),
  });

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
          {t('login:title')}
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Stack spacing={6}>
            <EmailInput {...register('email')} errors={errors} />
            <Flex direction="column" alignItems="flex-end">
              <PasswordInput {...register('password')} errors={errors} />
              <Link mt={1} href="#" fontSize="xs">
                {t('login:link.forgotPassword')}
              </Link>
            </Flex>
            <Button type="submit" size="sm" isFullWidth isDisabled={!isValid}>
              {t('login:action.signIn')}
            </Button>
          </Stack>
        </form>
      </Box>
      <Text textAlign="center" fontSize="xs" mt={6} mb={3}>
        {t('login:label.noAccount')}
      </Text>
      <Button type="button" size="sm" variant="outline" isFullWidth>
        {t('login:action.createAccount')}
      </Button>
    </SimpleLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!)),
    },
  };
};

export default Login;
