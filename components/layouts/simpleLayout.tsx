import { FC } from 'react';
import Image from 'next/image';
import { Box, Text, Container, Flex } from '@chakra-ui/react';

import ColorModeSwitcher from '@/components/common/colorModeSwitcher';

const SimpleLayout: FC = ({ children }) => {
  return (
    <>
      <Flex justifyContent="flex-end" p={5}>
        <ColorModeSwitcher />
      </Flex>
      <Container maxW={450} px={10} mt={10}>
        <Box w={16} h={16} mx="auto" mb={5}>
          <Image
            src="/falcon.svg"
            width="100"
            height="100"
            alt="Falcon"
          ></Image>
        </Box>
        <main>{children}</main>
        <Text fontSize="xs" color="gray.500" textAlign="center" mt={14}>
          &copy;2021 FalconMart
        </Text>
      </Container>
    </>
  );
};

export default SimpleLayout;
