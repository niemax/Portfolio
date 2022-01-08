import React from "react";
import { graphql } from "gatsby";
import {
  Flex,
  HStack,
  Heading,
  Box,
  AspectRatio,
  IconButton,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { windowOpen } from "../../utility/helpers/windowOpen";
import { PageScaleFade } from "../../components/motion/transitions";
import { getTagColor } from "../../utility/helpers/getTagColor";

function ProjectDetailsTemplate({ data: { markdownRemark } }: any) {
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.image?.childImageSharp);

  return (
    <Flex px={[0, 14, 14, 14]} align="center">
      <PageScaleFade>
        <Seo title={frontmatter.title} />
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
        <Box mt={10}>
          <Heading size="xs" color="grey">
            published on {frontmatter.date}
          </Heading>
          <HStack mt={3}>
            <Heading fontWeight="700">{frontmatter.title}</Heading>
            <Wrap>
              {frontmatter.techStack?.map((itm: any, idx: string) => (
                <WrapItem>
                  <Tag key={idx} rounded="md" size="sm" colorScheme="teal" variant="subtle">
                    <TagLabel color={getTagColor(itm)}>{itm}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </HStack>
          <HStack justify="space-between" align="center" mb={6}>
            <HStack>
              <Heading size="xs" color="green">
                {frontmatter.readTime} min read
              </Heading>
            </HStack>

            <HStack spacing={4} mt={2}>
              {frontmatter.demoLink !== "" && (
                <>
                  <Heading size="sm" color="green">
                    Demo Link
                  </Heading>
                  <IconButton
                    mt={3}
                    size="sm"
                    onClick={() => windowOpen(frontmatter.demoLink)}
                    variant="outline"
                    colorScheme="teal"
                    aria-label="demo link"
                    fontSize="20px"
                    shadow="md"
                    icon={<RiShareBoxFill />}
                  />
                </>
              )}

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
        date
        readTime
        gitHubLink
        techStack
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
