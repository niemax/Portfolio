import React, { ReactNode, Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Center, Box } from '@chakra-ui/react';
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
    <Fragment>
      <Header siteTitle={siteTitle} />
      <Box w={['90%', '85%', '80%']} maxW={840} mx="auto" mt={20}>
        <Box pb={10}>
          <main>{children}</main>
        </Box>
        <Footer />
      </Box>
    </Fragment>
  );
};

export default Layout;
