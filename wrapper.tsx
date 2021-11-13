import React from 'react';
import { ChakraProvider, Box, Center } from '@chakra-ui/react';
import Layout from './src/components/UI/layout';
import theme from './src/gatsby-plugin-chakra-ui/theme';

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  );
};
