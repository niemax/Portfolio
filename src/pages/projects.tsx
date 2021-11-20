import React from "react";
import { PageScaleFade } from "../components/motion/transitions";
import { Heading, Flex, Box, HStack } from "@chakra-ui/react";
import Seo from "../components/seo";
import { ProjectCards } from "../components/UI/Atoms/ProjectCards";
import { LineBreak } from "../components/UI/Atoms/LineBreak";
import { graphql, useStaticQuery } from "gatsby";
import { AllProjectsJson } from "../types";

const Projects = () => {
  const { allProjectsJson } = useStaticQuery<AllProjectsJson>(
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
                  gatsbyImageData(layout: FIXED, quality: 50, height: 40, width: 40)
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
        <Flex px={[0, 0, 14, 14]}>
          <Box>
            <Heading>My Work</Heading>
            <LineBreak width="7rem" mb={6} marginTop={2} />
            <Heading size="md">Some of my personal projects</Heading>
            <ProjectCards data={allProjectsJson?.edges} />
          </Box>
        </Flex>
      </PageScaleFade>
    </Flex>
  );
};

export default Projects;
