import React from "react";
import { motion } from "framer-motion";
import {
  Heading,
  Tooltip,
  Stack,
  HStack,
  Box,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { MBox } from "../../motion/MotionBox";
import { container, fromDownToUpItem, item, otherItem } from "../../motion/transitions";
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
  height?: string | number;
  shadow?: string;
  padding?: number;
  headingSize?: string;
  headingWeight?: number;
  icon?: any;
  textColor?: string;
  border?: string;
  animation?: Y | Scale;
  mb?: number;
  opacity?: number;
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
              background={props.backgroundColor}
              rounded={props.rounded}
              _hover={{ opacity: 1 }}
              animation={props.animation}
              opacity={props.opacity || 0.85}
              mt={props.mt || 20}
              mb={props.mb || 20}
              padding={props.padding}
              align="center"
              direction={["column", "column", index % 2 === 0 ? "row-reverse" : "row"]}
              border={props.border}
            >
              <motion.div variants={otherItem}>
                <MBox maxW={450} height="auto" animation={{ scale: 1.2 }} shadow="2xl">
                  <GatsbyImage image={image} imgStyle={{ borderRadius: 10 }} />
                </MBox>
              </motion.div>
              <motion.div variants={fromDownToUpItem}>
                <Box
                  h={props.height}
                  p={3}
                  maxW={[450, 450, 360, 370]}
                  rounded="lg"
                  shadow={props.shadow || "lg"}
                  bg={useColorModeValue("light", "boxes")}
                >
                  <Link to={resolvePathToSlug(props.slug, node.slug)}>
                    <Heading
                      textDecor="none"
                      mb={1}
                      size={props.headingSize}
                      fontWeight={props.headingWeight}
                    >
                      {node.name}
                    </Heading>
                  </Link>
                  <Box mt={3}>
                    <Heading size="sm" color={props.textColor}>
                      {node.description}
                    </Heading>
                  </Box>
                  <HStack mt={props.mt || 5} mb={2}>
                    {node.tech.map((itm: any, idx: string) => (
                      <i>
                        <Heading
                          key={idx}
                          size="sm"
                          color={useColorModeValue("black", "white")}
                          opacity={0.8}
                          fontWeight={700}
                        >
                          {itm}
                        </Heading>
                      </i>
                    ))}
                  </HStack>
                  <Box align={index % 2 !== 0 && "right"}>
                    <Tooltip
                      placement="auto"
                      bg={useColorModeValue("black", "white")}
                      color={useColorModeValue("white", "black")}
                      aria-label="Project link"
                      label="GitHub link"
                    >
                      <IconButton
                        mt={3}
                        isRound={true}
                        size="md"
                        onClick={() => windowOpen(node.url)}
                        variant="outline"
                        colorScheme="teal"
                        aria-label="project link"
                        fontSize={20}
                        shadow="md"
                        icon={<RiShareBoxFill />}
                      />
                    </Tooltip>
                  </Box>
                </Box>
              </motion.div>
            </Stack>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
