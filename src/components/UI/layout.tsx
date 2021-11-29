import React, { ReactNode, Fragment } from "react";
import Header from "./header";
import { Footer } from "./footer";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <Fragment>
    <Header />
    <main className="main">
      {children} <Footer />
    </main>
  </Fragment>
);

export default Layout;
