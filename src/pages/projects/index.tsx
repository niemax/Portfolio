import React from "react";
import { PageScaleFade } from "../../components/motion/transitions";
import { Heading, Flex, Box, HStack, useColorModeValue } from "@chakra-ui/react";
import Seo from "../../components/seo";
import { ProjectCards } from "../../components/UI/Atoms/ProjectCards";
import { graphql, useStaticQuery } from "gatsby";
import { AllProjectsJson } from "../../types";
import { MdOutlineWorkOutline } from "react-icons/md";

const Projects = () => {
  const { allProjectsJson } = useStaticQuery<AllProjectsJson>(
    graphql`
      query {
        allProjectsJson {
          edges {
            node {
              description
              language
              name
              tech
              url
              slug
              image {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    quality: 100
                    height: 450
                    width: 450
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
      <Seo title="Projects" />
      <Flex px={[2, 6, 0, 0]}>
        <Box>
          <HStack justify="center">
            <Heading ml={3}>My Work</Heading>
            <MdOutlineWorkOutline fontSize={32} color={useColorModeValue("black", "white")} />
          </HStack>
          <Heading size="md" ml={3} align="center" mt={3}>
            Some of my personal projects that I have personally found the most successful.
          </Heading>
          <ProjectCards data={allProjectsJson.edges} slug="" />
        </Box>
      </Flex>
    </PageScaleFade>
  );
};

export default Projects;
