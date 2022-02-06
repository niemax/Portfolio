import React from "react";
import { container, otherTransition, PageScaleFade } from "../../components/motion/transitions";
import { Heading, Flex, Box, HStack, useColorModeValue } from "@chakra-ui/react";
import Seo from "../../components/seo";
import { ProjectCards } from "../../components/UI/Atoms/ProjectCards";
import { graphql, useStaticQuery } from "gatsby";
import { AllProjectsJson } from "../../types";
import { MdOutlineWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";

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
          <motion.div variants={otherTransition} initial="hidden" animate="show">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 250 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                  },
                },
              }}
            >
              <HStack justify="center">
                <Heading ml={3}>My Work</Heading>
                <MdOutlineWorkOutline fontSize={32} color={useColorModeValue("black", "white")} />
              </HStack>
            </motion.div>
          </motion.div>
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -350 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.3,
                  },
                },
              }}
            >
              <Heading size="md" ml={3} align="center" mt={3}>
                Some of my personal projects that I like the most.
              </Heading>
            </motion.div>
          </motion.div>
          <ProjectCards data={allProjectsJson.edges} slug="" />
        </Box>
      </Flex>
    </PageScaleFade>
  );
};

export default Projects;
