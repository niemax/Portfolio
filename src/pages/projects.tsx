import React from 'react';
import { PageScaleFade } from '../components/motion/transitions';
import { Heading, Flex, Box } from '@chakra-ui/react';
import Seo from '../components/seo';
import { ProjectCards } from '../components/UI/Atoms/ProjectCards';
import { LineBreak } from '../components/UI/Atoms/LineBreak';
import { graphql, useStaticQuery } from 'gatsby';
import { AllProjectsJson } from '../interfaces';

const Projects = () => {
  const data = useStaticQuery<AllProjectsJson>(
    graphql`
      query {
        allProjectsJson {
          edges {
            node {
              color
              description
              language
              languageColor
              name
              tech
              url
              icon {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Flex>
      <PageScaleFade>
        <Seo title="Projects" />
        <Flex flexDir="column" px={[10, 14, 14, 14]}>
          <Box>
            <Heading>My Work</Heading>
            <LineBreak width="10rem" mb={6} />
            <Heading size="md">Personal projects that I've written.</Heading>
            <ProjectCards data={data?.allProjectsJson?.edges} />
          </Box>
        </Flex>
      </PageScaleFade>
    </Flex>
  );
};

export default Projects;
