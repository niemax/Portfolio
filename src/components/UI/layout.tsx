import React, { Fragment, ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Center } from '@chakra-ui/react';
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
      <Center mt={40}>
        <main>{children}</main>
      </Center>
    </Fragment>
  );
};

export default Layout;
