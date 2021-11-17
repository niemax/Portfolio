import React from 'react';
import { Heading, Box, Flex, VStack } from '@chakra-ui/react';
import Seo from '../components/seo';
import { PageScaleFade } from '../components/motion/transitions';
import { motion } from 'framer-motion';
import { LineBreak } from '../components/UI/Atoms/LineBreak';

const About = () => {
  return (
    <PageScaleFade>
      <motion.div>
        <Flex direction="column" align="center" px={[0, 0, 14, 14]}>
          <Seo title="About" />
          <Box>
            <section>
              <Heading>About me</Heading>
              <LineBreak width="10em" />
              <Heading size="md">
                Jumped into the world of Information Technology in 2019 based on personal interests
                whilst looking for something I am passionate about. Ever since it has been the one
                thing that I'm super passionate about and want to improve myself at a never-ending
                pace. Always looking for new creative ways to provide accessible and smooth software
                for all kinds of people. Love working as a team and taking into account everyones'
                vision. Really hard trying to learn clean code principles. No prior experience in
                the field, looking for my first job to prove my skills. Portfolio in the making as
                you are reading this. (nearly done).
              </Heading>
            </section>
          </Box>
        </Flex>
      </motion.div>
    </PageScaleFade>
  );
};

export default About;
