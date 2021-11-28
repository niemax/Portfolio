import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { LineBreak } from "./LineBreak";
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
            }
          }
        }
      }
    `
  );

  const mapped = allProjectsJson.edges.filter(({ node }: any) => node.name.startsWith("P"));

  return (
    <>
      <Heading mt={20}>Recent work</Heading>
      <Box w="100%">
        <ProjectCards data={mapped} slug="/projects" />
      </Box>
    </>
  );
};
