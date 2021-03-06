import React from "react";
import { graphql } from "gatsby";
import {
  Flex,
  HStack,
  Heading,
  Box,
  AspectRatio,
  IconButton,
  Wrap,
  WrapItem,
  useColorModeValue,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { windowOpen } from "../../utility/helpers/windowOpen";
import { PageScaleFade } from "../../components/motion/transitions";

function ProjectDetailsTemplate({ data: { markdownRemark } }: any) {
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.image?.childImageSharp);

  return (
    <PageScaleFade>
      <Flex direction="column" px={[2, 4, 14, 14]}>
        <Seo title={frontmatter.title} />
        {frontmatter.videoURL !== "" && (
          <Box p={2}>
            <Box align="center" bg="mainOrange" py={6} rounded="lg" shadow="dark-lg">
              <AspectRatio maxW={640} ratio={1}>
                <iframe
                  src={frontmatter.videoURL}
                  loading="lazy"
                  mozallowfullscreen={true}
                  allowFullScreen={true}
                />
              </AspectRatio>
            </Box>
          </Box>
        )}

        {image && (
          <GatsbyImage alt={frontmatter.title} image={image} imgStyle={{ borderRadius: 10 }} />
        )}
        <Box mt={10} px={2}>
          <VStack align="left">
            <HStack>
              <Heading textDecor="none" fontWeight="700">
                {frontmatter.title}
              </Heading>
              <Wrap>
                {frontmatter.techStack?.map((itm: any, idx: string) => (
                  <WrapItem key={idx}>
                    <i>
                      <Text fontSize="xs" textDecor="none" opacity={0.8} fontWeight={700}>
                        {itm}
                      </Text>
                    </i>
                  </WrapItem>
                ))}
              </Wrap>
            </HStack>
            <Heading size="xs" color="grey">
              {frontmatter.date} &#8226; {frontmatter.readTime} min read
            </Heading>
          </VStack>
          <HStack justify="space-between" align="center" mb={6} mt={3}>
            <HStack>
              {frontmatter.demoLink && (
                <>
                  <Heading size="sm" color="mainOrange">
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

              <Heading size="sm" color="mainOrange">
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
        <Box ml={2} dangerouslySetInnerHTML={{ __html: html }} />
      </Flex>
    </PageScaleFade>
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
