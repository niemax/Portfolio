import React from "react";
import { Flex } from "@chakra-ui/react";
import Seo from "../components/seo";
import { otherItem, otherTransition, PageScaleFade } from "../components/motion/transitions";
import { Story } from "../components/UI/Atoms/MyStory";
import { Education } from "../components/UI/Atoms/Education";
import { Likings } from "../components/UI/Atoms/Likings";
import Career from "../components/UI/Atoms/Career";
import { motion } from "framer-motion";

const About = () => (
  <PageScaleFade>
    <Seo title="About" />
    <Flex px={[2, 10, 14, 14]} direction="column">
      <motion.div variants={otherTransition} initial="hidden" animate="show">
        <motion.div variants={otherItem}>
          {/*    <section>
            <Story />
          </section> */}
          <section>
            <Likings />
          </section>
          <section>
            <Career />
          </section>
          <section>
            <Education />
          </section>
        </motion.div>
      </motion.div>
    </Flex>
  </PageScaleFade>
);

export default About;
