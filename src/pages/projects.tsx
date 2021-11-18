import React from "react";
import { PageScaleFade } from "../components/motion/transitions";
import { Heading, Flex, Box } from "@chakra-ui/react";
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
        <Flex px={[2, 10, 14, 14]}>
          <Box>
            <Heading>My Work</Heading>
            <LineBreak width="8rem" mb={6} marginTop={2} />
            <Heading size="md">Personal projects that I've written.</Heading>
            <ProjectCards data={allProjectsJson?.edges} />
          </Box>
        </Flex>
      </PageScaleFade>
    </Flex>
  );
};

export default Projects;
