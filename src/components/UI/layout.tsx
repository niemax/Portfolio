import React, { ReactNode, Fragment } from "react";
import Header from "./header";
import { Footer } from "./footer";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { container, item, otherItem } from "../motion/transitions";

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
      <Flex align="center" justify="center" mt="50vh">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Heading textDecor="none">Welcome!</Heading>
          </motion.div>
        </motion.div>
      </Flex>
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
