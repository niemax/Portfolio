import React, { ReactNode, Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box } from "@chakra-ui/react";
import Header from "./header";
import { Footer } from "./footer";

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

  const siteTitle = data.site.siteMetadata?.title;

  return (
    <Fragment>
      <Header siteTitle={siteTitle} />
      <main className="main">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
