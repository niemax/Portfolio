import React from "react";
import { motion } from "framer-motion";
import {
  Heading,
  Tooltip,
  Flex,
  Stack,
  Tag,
  TagLabel,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { MBox } from "../../motion/MotionBox";
import { container, item } from "../../motion/transitions";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { getTagColor } from "../../../utility/helpers/getTagColor";
import { windowOpen } from "../../../utility/helpers/windowOpen";
import { Link } from "gatsby";

interface IProjectCardProps {
  data: any[];
  slug: string;
}

export const ProjectCards = (props: IProjectCardProps) => {
  // if user clicks from recents box at homepage, then the slug is /projects/SLUG_NAME
  // if user comes from projects page, slug is only the SLUG_NAME
  const resolvePathToSlug = (slugFromProps: string, slugFromMap: string) => {
    if (slugFromProps !== "") {
      return `${slugFromProps}/${slugFromMap}`;
    } else {
      return slugFromMap;
    }
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {props.data.map(({ node }: any) => {
        const image = getImage(node.icon?.childImageSharp);
        return (
          <motion.div variants={item} key={node.name}>
            <Link to={resolvePathToSlug(props.slug, node.slug)}>
              <MBox
                height="auto"
                width="auto"
                border={useColorModeValue("1px solid #E2E2E2", `1px solid #2A404B`)}
                my={4}
                py={1}
                animation={{ scale: 1.04 }}
              >
                <Flex p={4} direction="column">
                  <Stack
                    direction={["column", "row", "row", "row"]}
                    align="center"
                    justify="baseline"
                  >
                    <GatsbyImage alt={node.language} image={image} />
                    <Tooltip
                      placement="top"
                      bg={useColorModeValue("black", "white")}
                      color={useColorModeValue("white", "black")}
                      aria-label="A tooltip"
                      label="Github Link"
                    >
                      <Box as="a" fontSize="xl" onClick={() => windowOpen(node.url)}>
                        {node.name}
                      </Box>
                    </Tooltip>
                    <Stack direction="row">
                      {node.tech.map((itm: any, idx: string) => (
                        <Tag key={idx} rounded="md" size="sm" colorScheme="teal" variant="subtle">
                          <TagLabel color={getTagColor(itm)}>{itm}</TagLabel>
                        </Tag>
                      ))}
                    </Stack>
                  </Stack>
                  <Heading size="sm" mt="1">
                    {node.description}
                  </Heading>
                </Flex>
              </MBox>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
