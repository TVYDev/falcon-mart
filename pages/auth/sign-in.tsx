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

import TextInput from '@/components/common/textInput';
import PasswordInput from '@/components/common/passwordInput';
import SimpleLayout from '@/components/layouts/simpleLayout';

interface SignInFormInputs {
  email: string;
  password: string;
}

const SignIn: NextPage = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('common:input.email.invalid.format'))
      .required(t('common:input.email.invalid.required'))
      .trim(),
    password: yup
      .string()
      .required(t('common:input.password.invalid.required')),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<SignInFormInputs> = (data) =>
    alert(JSON.stringify(data));

  return (
    <SimpleLayout>
      <Box border="1px" borderRadius="10px" p={5}>
        <Heading as="h1" mb={3} size="md">
          {t('signIn:title')}
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Stack spacing={6}>
            <TextInput
              type="email"
              placeholder={t('common:input.email.placeholder')}
              {...register('email')}
              errors={errors}
            />
            <Flex direction="column" alignItems="flex-end">
              <PasswordInput {...register('password')} errors={errors} />
              <Link mt={1} href="#" fontSize="xs">
                {t('signIn:link.forgotPassword')}
              </Link>
            </Flex>
            <Button type="submit" size="sm" isFullWidth isDisabled={!isValid}>
              {t('signIn:action.signIn')}
            </Button>
          </Stack>
        </form>
      </Box>
      <Text textAlign="center" fontSize="xs" mt={6} mb={3}>
        {t('signIn:label.noAccount')}
      </Text>
      <Button type="button" size="sm" variant="outline" isFullWidth>
        {t('signIn:link.createAccount')}
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

export default SignIn;
