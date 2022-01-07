import React, { ReactNode, Fragment } from "react";
import Header from "./header";
import { Footer } from "./footer";
import { Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { container, otherItem } from "../motion/transitions";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const [showWelcomeText, setShowWelcomeText] = React.useState<boolean>(false);

  React.useEffect(() => {
    setShowWelcomeText(true);

    const timeout = setTimeout(() => {
      setShowWelcomeText(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (showWelcomeText)
    return (
      <motion.div variants={container} initial="hidden" animate="show">
        <Flex align="center" justify="center" mt="50vh">
          <motion.div variants={otherItem}>
            <Heading textDecor="none">Welcome, traveller!</Heading>
          </motion.div>
        </Flex>
      </motion.div>
    );
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
