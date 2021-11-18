import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Seo from "../components/seo";
import { PageScaleFade } from "../components/motion/transitions";
import { Story } from "../components/UI/Atoms/Story";
import { Education } from "../components/UI/Atoms/Education";

const About = () => {
  return (
    <PageScaleFade>
      <Flex direction="column" align="center" px={[0, 0, 14, 14]}>
        <Seo title="About" />
        <Box>
          <section>
            <Story />
          </section>
          <section>
            <Education />
          </section>
        </Box>
      </Flex>
    </PageScaleFade>
  );
};

export default About;
