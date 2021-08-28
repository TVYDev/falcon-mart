import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box, Heading, Stack, Button, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import SimpleLayout from '@/components/layouts/simpleLayout';
import TextInput from '@/components/common/textInput';
import PasswordInput from '@/components/common/passwordInput';

interface CreateAccountFormInputs {
  username: string;
  email: string;
  password: string;
}

const CreateAccount: NextPage = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    username: yup
      .string()
      .required(t('common:input.username.invalid.required'))
      .min(2, t('common:input.username.invalid.min', { length: 2 }))
      .max(30, t('common:input.username.invalid.max', { length: 30 }))
      .matches(/[a-zA-Z0-9_]/, t('common:input.username.invalid.format'))
      .trim(),
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
  } = useForm<CreateAccountFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<CreateAccountFormInputs> = (data) =>
    alert(JSON.stringify(data));

  return (
    <SimpleLayout>
      <Box border="1px" borderRadius="10px" p={5}>
        <Heading as="h1" mb={3} size="md">
          {t('createAccount:title')}
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Stack spacing={6}>
            <TextInput
              type="text"
              placeholder={t('common:input.username.placeholder')}
              {...register('username')}
              errors={errors}
            />
            <TextInput
              type="email"
              placeholder={t('common:input.email.placeholder')}
              {...register('email')}
              errors={errors}
            />
            <PasswordInput {...register('password')} errors={errors} />
            <Button type="submit" size="sm" isFullWidth isDisabled={!isValid}>
              {t('createAccount:action.createAccount')}
            </Button>
          </Stack>
        </form>
      </Box>
      <Text textAlign="center" fontSize="xs" mt={6} mb={3}>
        {t('createAccount:label.alreadyGotAccount')}
      </Text>
      <Button type="button" size="sm" variant="outline" isFullWidth>
        {t('createAccount:link.signIn')}
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

export default CreateAccount;
