import React from "react";
import { graphql } from "gatsby";
import {
  Flex,
  HStack,
  Heading,
  Box,
  AspectRatio,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Seo from "../../components/seo";
import { windowOpen } from "../../utility/helpers/windowOpen";

function ProjectDetailsTemplate({ data: { markdownRemark } }: any) {
  const { frontmatter, html } = markdownRemark;

  return (
    <Flex px={[4, 14, 14, 14]} direction="column">
      <Seo title={frontmatter.title} />

      <Box align="center" bg={"green"} py={6} rounded="xl" shadow="md">
        <AspectRatio maxW={640} ratio={1}>
          <iframe
            src={frontmatter.videoURL}
            loading="lazy"
            webkitallowfullscreen={true}
            mozallowfullscreen={true}
            allowFullScreen={true}
          />
        </AspectRatio>
      </Box>
      <Box mt={8} w="100%" h={"0.1rem"} bg="grey" />
      <Box mt={10}>
        <HStack justify="space-between" align="center" mb={6}>
          <Heading fontWeight="700">{frontmatter.title}</Heading>
          <HStack>
            <Heading size="sm">Project Link</Heading>
            <IconButton
              as="a"
              fontSize={26}
              variant="ghost"
              aria-label="Github Link"
              icon={<FaGithub />}
              _hover={{ bg: "#6e5494" }}
              onClick={() => windowOpen(frontmatter.gitHubLink)}
            />
          </HStack>
        </HStack>
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
        gitHubLink
      }
    }
  }
`;

export default ProjectDetailsTemplate;
