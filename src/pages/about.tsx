import React from 'react';
import { Heading, Box, Flex, VStack, HStack } from '@chakra-ui/react';
import Seo from '../components/seo';
import { PageScaleFade } from '../components/motion/transitions';
import { motion } from 'framer-motion';
import { LineBreak } from '../components/UI/Atoms/LineBreak';
import { MBox } from '../components/motion/MotionBox';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  return (
    <PageScaleFade>
      <Flex direction="column" align="center" px={[0, 0, 14, 14]}>
        <Seo title="About" />
        <Box>
          <section>
            <Heading>What's my story?</Heading>
            <LineBreak width="19rem" mb={5} />
            <Heading size="md">
              Jumped into the world of Information Technology in 2019 as a wandered. Ever since it
              has been the one thing that I'm super passionate about and want to improve myself at a
              never-ending pace. Always looking for new creative ways to provide accessible and
              smooth software for all kinds of people. Love working as a team and taking into
              account everyones' vision. Also constantly trying to better myself on clean code
              principles.
            </Heading>
          </section>
          <section>
            <Box mt="10">
              <Heading mt="6">Education</Heading>
              <LineBreak width="11rem" />
              <MBox
                height="auto"
                width="100%"
                rounded="md"
                animation={{ scale: 1.02 }}
                shadow="md"
                py={2}
              >
                <HStack align="center" spacing={4}>
                  <StaticImage
                    src="../images/315f6f8c-0795-46b7-9c87-9f69a44a9d81.png"
                    alt="education logo"
                    placeholder="blurred"
                    width={120}
                    height={120}
                  />
                  <VStack align="baseline">
                    <Heading size="md" fontWeight="600">
                      Haaga-Helia UAS
                    </Heading>
                    <Heading size="sm">ICT and Digital Services</Heading>
                    <Heading size="sm">2020 - present</Heading>
                  </VStack>
                </HStack>
              </MBox>
            </Box>
          </section>
        </Box>
      </Flex>
    </PageScaleFade>
  );
};

export default About;
