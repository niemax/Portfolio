import React from "react";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { ProjectCards } from "./ProjectCards";
import { graphql, Link, useStaticQuery } from "gatsby";
import { AllProjectsJson } from "../../../types";
import { motion } from "framer-motion";

export const Recents = () => {
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
                    height: 30
                    width: 30
                    placeholder: BLURRED
                  )
                }
              }
              image {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    quality: 100
                    height: 200
                    width: 400
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

  const mapped = allProjectsJson.edges.filter(({ node }: any) => node.name === "Portfolio");

  return (
    <>
      <Heading mt={20}>Recent work</Heading>
      <Box mt={3}>
        <ProjectCards
          data={mapped}
          slug="/projects"
          backgroundColor={useColorModeValue("light", "boxes")}
          rounded="md"
          mt={6}
          shadow="sm"
          padding={1}
          headingSize="md"
          headingWeight={700}
          textColor="gray"
          border={useColorModeValue("1px solid #E2E2E2", `1px solid #2A404B`)}
          animation={{ scale: 1.04 }}
        />
      </Box>
    </>
  );
};
