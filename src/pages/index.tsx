import { Link } from 'gatsby';
import React from 'react';
import { Box, Heading, Flex, Container, HStack } from '@chakra-ui/react';
import Seo from '../components/seo';
import { Memoji } from '../components/UI/Atoms/Memoji';
import { PageScaleFade } from '../components/motion/transitions';
import { ProjectCards } from '../components/UI/Atoms/ProjectCards';
import { LineBreak } from '../components/UI/Atoms/LineBreak';

const IndexPage = () => {
  return (
    <Flex direction="column" align="center">
      <Flex direction={['column', 'column', 'row']}>
        <Seo title="Home" />
        <PageScaleFade>
          <Flex direction="column" align="self-start">
            <HStack>
              <Box align="center" justify="center">
                <Memoji width={140} height={140} padding={3} />
              </Box>
            </HStack>
            <Heading mt="10">
              Hello{' '}
              <Box className="wave" as="span">
                👋
              </Box>
            </Heading>
            <LineBreak width={'7rem'} mt={5} />
            <Box>
              <Heading size="md" fontWeight="400">
                I'm{' '}
                <Box as="span" fontWeight="800" color="green">
                  Axel,{' '}
                </Box>
                Software developer from Helsinki, Finland. My vision is making the web accessible
                and smooth for everyone. Love working in the Javascript ecosystem. Especially React,
                NodeJS.
              </Heading>
            </Box>
            <Flex mt="14"></Flex>
            <Heading mt="14">Recent work</Heading>
            <Box mt="4">
              <LineBreak width="12rem" />
            </Box>
            <ProjectCards width="auto" name="Habitio" />
          </Flex>
        </PageScaleFade>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
