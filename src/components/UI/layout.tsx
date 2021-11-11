import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Box, useColorMode, Center, Flex } from '@chakra-ui/react';
import Header from './header';
import { Footer } from './footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <>
      <Header siteTitle={siteTitle} />
      <Flex maxW={800} mx="auto" px={[20, 10, 5]} direction="column">
        <main>{children}</main>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
