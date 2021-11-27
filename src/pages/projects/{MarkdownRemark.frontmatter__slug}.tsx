import React from "react";
import { graphql } from "gatsby";
import { Flex, Center, HStack, Heading, Box, AspectRatio, IconButton } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { windowOpen } from "../../utility/helpers/windowOpen";
import { PageScaleFade } from "../../components/motion/transitions";

function ProjectDetailsTemplate({ data: { markdownRemark } }: any) {
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.image?.childImageSharp);

  return (
    <Flex px={[4, 14, 14, 14]}>
      <Seo title={frontmatter.title} />
      <PageScaleFade>
        {frontmatter.videoURL !== "" && (
          <Box align="center" bg="green" py={6} rounded="lg" shadow="md">
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
        )}

        <Box>
          <GatsbyImage alt={frontmatter.title} image={image} />
        </Box>
        <Box mt={8} w="100%" h={"0.1rem"} bg="grey" />
        <Box mt={10}>
          <HStack justify="space-between" align="center" mb={6}>
            <HStack>
              <Heading fontWeight="700">{frontmatter.title}</Heading>
              {/* Change this hardcoded value to dynamic */}
              <Heading size="xs" ml={2} color="green">
                - {frontmatter.readTime} min read
              </Heading>
            </HStack>
            <HStack>
              <Heading size="sm" color="green">
                Project Link
              </Heading>
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
      </PageScaleFade>
    </Flex>
  );
}

export const pageQuery = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        videoURL
        title
        slug
        readTime
        gitHubLink
        image {
          childImageSharp {
            gatsbyImageData(
              quality: 80
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 700
              height: 700
            )
          }
        }
      }
    }
  }
`;

export default ProjectDetailsTemplate;
