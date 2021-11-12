import { Link } from 'gatsby';
import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import Seo from '../components/seo';
import { Memoji } from '../components/UI/Memoji';
import { PageScaleFade } from '../utility/styles/transitions';
import { ProjectCards } from '../components/UI/ProjectCards';
import { LineBreak } from '../components/UI/LineBreak';

const IndexPage = () => {
  return (
    <Flex>
      <PageScaleFade>
        <Seo title="Home" />
        <Box align="center" justify="center">
          <Memoji width={160} height={160} padding={3} />
        </Box>
        <Flex direction={['column', 'column', 'row']} align="center" justify="center" mt="5">
          <Box align="self-start" w="68%">
            <Heading color="green" mb="5">
              Hello{' '}
              <Box className="wave" as="span">
                👋
              </Box>
            </Heading>
            <LineBreak width={'7rem'} />
            <Heading fontSize="xl" fontWeight="400">
              I'm{' '}
              <Box as="span" fontWeight="800" color="green">
                Axel,{' '}
              </Box>
              Software developer from Helsinki, Finland. My vision is making the web accessible and
              smooth for everyone. Love working in the Javascript ecosystem. Especially React,
              NodeJS.
            </Heading>

            <Box mt="14">
              <Heading fontSize="2xl" fontWeight="600">
                See my work{' '}
                <Link to="/projects">
                  <Box as="a" color="green" fontWeight={800}>
                    here
                  </Box>
                </Link>
              </Heading>
            </Box>
          </Box>
        </Flex>
        <Box mt="32" ml={['1.5rem', '1.5rem', '4.3rem', '4.3rem']} px={[10, 14, 20, 20]}>
          <Heading color="green">Recent work</Heading>
          <LineBreak width={'12rem'} marginTop={3} />
          <ProjectCards name="Habitio" />
        </Box>
      </PageScaleFade>
    </Flex>
  );
};

export default IndexPage;
