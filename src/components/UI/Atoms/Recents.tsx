import React from "react";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { ProjectCards } from "./ProjectCards";
import { graphql, useStaticQuery } from "gatsby";
import { AllProjectsJson } from "../../../types";

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

  const mapped = allProjectsJson.edges.filter(({ node }: any) => node.name === "Realtime Chat");

  return (
    <>
      <Heading mt={20}>Recent work</Heading>
      <Box mt={8}>
        <ProjectCards
          data={mapped}
          slug="/projects"
          height="full"
          backgroundColor={useColorModeValue("white", "boxes")}
          rounded="md"
          shadow="none"
          padding={2}
          headingSize="md"
          headingWeight={700}
          textColor="gray"
          border={useColorModeValue("1px solid #E2E2E2", `1px solid #2A404B`)}
          animation={{ scale: 1.04 }}
          mt={1}
          bg="none"
        />
      </Box>
    </>
  );
};
