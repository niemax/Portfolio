import React, { Fragment, ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from '@chakra-ui/react';
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
      <Container maxW="container.md" p={0}>
        <main>{children}</main>
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Layout;
