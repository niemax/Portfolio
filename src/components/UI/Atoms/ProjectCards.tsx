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

/**
 * ? Cards include: tech stack Array, name, description, overall own rating
 * ! check the render methods of cards. Should come from a local json array in ./data folder
 * * Props: array of projects
 */

export const ProjectCards = ({ data }: any) => {
  const animation = { scale: 1.04 };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {data.map(({ node }: any) => {
        const image = getImage(node?.icon?.childImageSharp);
        return (
          <motion.div variants={item} key={node.name}>
            <Box as="a" onClick={() => windowOpen(`${node.url}`)} align="center" justify="center">
              <MBox
                height="auto"
                width="auto"
                /*  borderLeft={`3px solid ${node.languageColor}`} */
                shadow="md"
                my={5}
                rounded="md"
                py={1}
                animation={{ scale: 1.04 }}
              >
                <Flex p={5} direction="column">
                  <Stack direction={["column", "row", "row", "row"]} align="center">
                    <GatsbyImage alt={node.language} image={image} />
                    <Stack mb="3" direction={["column", "row", "row", "row"]}>
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
                      {node.tech.map((itm: any, idx: string) => (
                        <Tag key={idx} rounded="md" size="md" variant="subtle">
                          <TagLabel color={getTagColor(itm)}>{itm}</TagLabel>
                        </Tag>
                      ))}
                    </Stack>
                  </Stack>
                  <Heading size="sm" mt="2">
                    {node.description}
                  </Heading>
                </Flex>
              </MBox>
            </Box>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
