import React from "react";
import { PageScaleFade } from "../../components/motion/transitions";
import { Heading, Flex, Box, HStack } from "@chakra-ui/react";
import Seo from "../../components/seo";
import { ProjectCards } from "../../components/UI/Atoms/ProjectCards";
import { graphql, useStaticQuery } from "gatsby";
import { AllProjectsJson } from "../../types";

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
              slug
              icon {
                childImageSharp {
                  gatsbyImageData(
                    layout: FIXED
                    quality: 50
                    height: 40
                    width: 40
                    placeholder: BLURRED
                  )
                }
              }
              image {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    quality: 100
                    height: 500
                    width: 500
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <PageScaleFade>
      <Flex direction="column" align="center">
        <Seo title="Projects" />
        <Flex px={[2, 6, 0, 0]}>
          <Box>
            <Heading>My Work</Heading>
            <Heading size="md" mt={4} mb={6}>
              Some of my personal projects
            </Heading>
            <ProjectCards data={allProjectsJson.edges} slug="" />
          </Box>
        </Flex>
      </Flex>
    </PageScaleFade>
  );
};

export default Projects;
