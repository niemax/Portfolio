import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { LineBreak } from './LineBreak';
import { ProjectCards } from './ProjectCards';
import { graphql, useStaticQuery } from 'gatsby';
import { AllProjectsJson } from '../../../interfaces';

export const Recents = () => {
  const { allProjectsJson }: any = useStaticQuery<AllProjectsJson>(
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

  const mapped = allProjectsJson.edges?.filter(({ node }: any) => node.name.startsWith('P'));

  return (
    <>
      <Heading mt="20">Recent work</Heading>
      <LineBreak width="14rem" mb={2} />
      <Box w="100%">
        <ProjectCards data={mapped} />
      </Box>
    </>
  );
};
