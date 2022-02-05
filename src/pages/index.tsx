import * as React from "react";
import { Center, Flex, HStack } from "@chakra-ui/react";
import Seo from "../components/seo";
import { Memoji } from "../components/UI/Atoms/Memoji";
import { container, item, PageScaleFade } from "../components/motion/transitions";
import { Introduction } from "../components/UI/Atoms/Introduction";
import { Recents } from "../components/UI/Atoms/Recents";
import { Features } from "../components/UI/Atoms/Features";
import { motion } from "framer-motion";

const IndexPage = () => (
  <Flex direction="column" align="center" px={[2, 14, 14, 14]}>
    <PageScaleFade>
      <Seo title="Home" />
      <Flex direction={["column", "column", "row"]}>
        <Flex direction="column" align="self-start">
          <HStack align="center" justify="center" mx="auto">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={item}>
                <Center>
                  <Memoji width={150} height={150} padding={3} />
                </Center>
                <Introduction />
              </motion.div>
            </motion.div>
          </HStack>
          <section>
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 200 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1.2,
                    },
                  },
                }}
              >
                <Features />
                <Recents />
              </motion.div>
            </motion.div>
          </section>
        </Flex>
      </Flex>
    </PageScaleFade>
  </Flex>
);

export default IndexPage;
