import type { FC } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import ReactCountryFlag from 'react-country-flag';

const LocaleSwitcher: FC = (props) => {
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = router.locale === 'en' ? 'km' : 'en';
    router.replace(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <Button size="xs" {...props} onClick={toggleLocale}>
      <ReactCountryFlag
        countryCode={router.locale === 'en' ? 'KH' : 'US'}
        svg
      />
    </Button>
  );
};

export default LocaleSwitcher;
