import { ChakraProvider, Container, Box } from '@chakra-ui/react';
import React from 'react';
import Layout from './src/components/UI/layout';
import theme from './src/gatsby-plugin-chakra-ui/theme';

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box maxW={960} mx="auto" p={0} justify="center">
        <Layout>{element}</Layout>
      </Box>
    </ChakraProvider>
  );
};
