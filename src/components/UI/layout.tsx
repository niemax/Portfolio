import React, { ReactNode, Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import { Footer } from "./footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
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
      <Header />
      <main className="main">
        {children} <Footer />
      </main>
    </Fragment>
  );
};

export default Layout;
