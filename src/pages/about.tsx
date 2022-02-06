import React from "react";
import { Flex } from "@chakra-ui/react";
import Seo from "../components/seo";
import {
  otherItem,
  otherTransition,
  PageScaleFade,
  staggerProjectCardContainer,
  staggerProjectCardItem,
} from "../components/motion/transitions";
import { Story } from "../components/UI/Atoms/MyStory";
import { Education } from "../components/UI/Atoms/Education";
import { Likings } from "../components/UI/Atoms/Likings";
import Career from "../components/UI/Atoms/Career";
import { motion } from "framer-motion";

const About = () => (
  <PageScaleFade>
    <Seo title="About" />
    <Flex px={[2, 10, 14, 14]} direction="column">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={staggerProjectCardItem}>
          <section>
            <Career />
          </section>
        </motion.div>

        <motion.div variants={staggerProjectCardItem}>
          <section>
            <Education />
          </section>
        </motion.div>
      </motion.div>
    </Flex>
  </PageScaleFade>
);

export default About;
