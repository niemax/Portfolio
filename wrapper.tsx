import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./src/components/UI/layout";
import customTheme from "./src/gatsby-plugin-chakra-ui/theme";

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  );
};
