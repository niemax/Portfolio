import React from "react";
import { graphql } from "gatsby";
import { Flex, HStack, Heading, Box, AspectRatio, useColorModeValue } from "@chakra-ui/react";
import Seo from "../../components/seo";

function ProjectDetailsTemplate({ data: { markdownRemark } }: any) {
  const { frontmatter, html } = markdownRemark;

  return (
    <Flex px={[2, 14, 14, 14]} direction="column">
      <Seo title={frontmatter.title} />

      <Box align="center">
        <AspectRatio maxW={660} ratio={1}>
          <iframe
            src={frontmatter.videoURL}
            loading="lazy"
            webkitallowfullscreen={true}
            mozallowfullscreen={true}
            allowFullScreen={true}
          />
        </AspectRatio>
      </Box>
      <Box mt={10}>
        <Box mb={6}>
          <Heading fontWeight="700">{frontmatter.title}</Heading>
        </Box>
      </Box>
      <Box dangerouslySetInnerHTML={{ __html: html }} />
    </Flex>
  );
}

export const pageQuery = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        videoURL
      }
    }
  }
`;

export default ProjectDetailsTemplate;
