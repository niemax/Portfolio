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
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 150 },
            show: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
              },
            },
          }}
        >
          {/*    <section>
            <Story />
          </section> */}
          <section>
            <Career />
          </section>
          <section>
            <Education />
          </section>
          {/*  <section>
            <Likings />
          </section> */}
        </motion.div>
      </motion.div>
    </Flex>
  </PageScaleFade>
);

export default About;
