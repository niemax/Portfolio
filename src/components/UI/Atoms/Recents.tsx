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
              icon {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, quality: 50, height: 30, width: 30)
                }
              }
            }
          }
        }
      }
    `
  );

  const mapped = allProjectsJson.edges?.filter(({ node }: any) => node.name.startsWith("P"));
  return (
    <>
      <Heading mt={20}>Recent work</Heading>
      <LineBreak width="11rem" mb={1} />
      <Box w="100%">
        <ProjectCards data={mapped} />
      </Box>
    </>
  );
};
