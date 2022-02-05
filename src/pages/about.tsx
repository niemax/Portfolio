import React from "react";
import { Flex } from "@chakra-ui/react";
import Seo from "../components/seo";
import { PageScaleFade } from "../components/motion/transitions";
import { Story } from "../components/UI/Atoms/Story";
import { Education } from "../components/UI/Atoms/Education";
import { Likings } from "../components/UI/Atoms/Likings";
import Career from "../components/UI/Atoms/Career";

const About = () => (
  <PageScaleFade>
    <Seo title="About" />
    <Flex px={[2, 10, 14, 14]} direction="column">
      <section>
        <Story />
      </section>
      <section>
        <Likings />
      </section>
      <section>
        <Career />
      </section>
      <section>
        <Education />
      </section>
    </Flex>
  </PageScaleFade>
);

export default About;
