import * as React from "react";
import { Box, Center, Flex, HStack, Stack } from "@chakra-ui/react";
import Seo from "../components/seo";
import { Memoji } from "../components/UI/Atoms/Memoji";
import {
  container,
  item,
  otherItem,
  otherTransition,
  PageScaleFade,
} from "../components/motion/transitions";
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
                <Stack direction={["column", "column", "row"]} spacing={10} align="center">
                  <motion.div variants={container} initial="hidden" animate="show">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -250 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.8,
                          },
                        },
                      }}
                    >
                      <Box mt={8}>
                        <Memoji width={130} height={130} padding={3} shadow="dark-lg" />
                      </Box>
                    </motion.div>
                  </motion.div>
                  <motion.div variants={otherTransition} initial="hidden" animate="show">
                    <motion.div variants={otherItem}>
                      <Box maxW={590}>
                        <Introduction />
                      </Box>
                    </motion.div>
                  </motion.div>
                </Stack>
              </motion.div>
            </motion.div>
          </HStack>
          <section>
            <motion.div
              variants={{
                hidden: { opacity: 0, transition: { when: "afterChildren" } },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    staggerDirection: -5,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
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
