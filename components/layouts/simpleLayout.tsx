import { FC } from 'react';
import Image from 'next/image';
import { Box, Text, Container } from '@chakra-ui/react';

const SimpleLayout: FC = ({ children }) => {
  return (
    <Container maxW={450} px={10} mt={16}>
      <Box w={16} h={16} mx="auto" mb={5}>
        <Image src="/falcon.svg" width="100" height="100" alt="Falcon"></Image>
      </Box>
      <main>{children}</main>
      <Text fontSize="xs" color="gray.500" textAlign="center" mt={14}>
        &copy;2021 FalconMart
      </Text>
    </Container>
  );
};

export default SimpleLayout;
