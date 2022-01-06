import React from "react";
import { motion } from "framer-motion";
import {
  Heading,
  Tooltip,
  Stack,
  HStack,
  VStack,
  Box,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { MBox } from "../../motion/MotionBox";
import { container, fromDownToUpItem, item, otherItem, skillsItem } from "../../motion/transitions";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { windowOpen } from "../../../utility/helpers/windowOpen";
import { Link } from "gatsby";
import { Scale, Y } from "../../../types";
import { RiShareBoxFill } from "react-icons/ri";

interface IProjectCardProps {
  data: any[];
  slug: string;
  backgroundColor?: string;
  rounded?: string;
  mt?: number;
  shadow?: string;
  padding?: number;
  headingSize?: string;
  headingWeight?: number;
  icon?: any;
  textColor?: string;
  border?: string;
  animation?: Y | Scale;
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
      {props.data.map(({ node }: any, index: number) => {
        const image = getImage(node.image?.childImageSharp);
        return (
          <motion.div variants={item} key={node.name}>
            <Stack
              shadow={props.shadow}
              mt={props.mt}
              background={props.backgroundColor}
              rounded={props.rounded}
              _hover={{ opacity: 1 }}
              animation={props.animation}
              opacity={0.8}
              mb={20}
              padding={props.padding}
              direction={["column", "column", index % 2 === 0 ? "row-reverse" : "row"]}
              align="self-start"
              border={props.border}
            >
              <motion.div variants={otherItem}>
                <MBox width="auto" height="auto" animation={{ scale: 1.03 }} shadow="2xl">
                  <GatsbyImage image={image} />
                </MBox>
              </motion.div>
              <motion.div variants={fromDownToUpItem}>
                <VStack align="self-start">
                  <Box ml={2}>
                    <HStack justify="space-between" align="self-start">
                      <Link to={resolvePathToSlug(props.slug, node.slug)}>
                        <Heading
                          textDecor="none"
                          mb={3}
                          size={props.headingSize}
                          fontWeight={props.headingWeight}
                        >
                          {node.name}
                        </Heading>
                      </Link>
                      <Tooltip
                        placement="auto"
                        bg={useColorModeValue("black", "white")}
                        color={useColorModeValue("white", "black")}
                        aria-label="Project link"
                        label="GitHub link"
                      >
                        <IconButton
                          size="sm"
                          onClick={() => windowOpen(node.url)}
                          variant="outline"
                          colorScheme="teal"
                          aria-label="project link"
                          fontSize="20px"
                          icon={<RiShareBoxFill />}
                        />
                      </Tooltip>
                    </HStack>
                    <Box maxW={80} mx="auto">
                      <Heading size="sm" color={props.textColor}>
                        {node.description}
                      </Heading>
                    </Box>
                    <HStack mt={5} mb={2}>
                      {node.tech.map((itm: any, idx: string) => (
                        <Heading
                          key={idx}
                          size="sm"
                          color={useColorModeValue("black", "white")}
                          opacity={0.8}
                          fontWeight={700}
                        >
                          {itm}
                        </Heading>
                      ))}
                    </HStack>
                  </Box>
                </VStack>
              </motion.div>
            </Stack>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
