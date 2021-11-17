import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Tooltip, Flex, Stack, Tag, Box, useColorModeValue } from '@chakra-ui/react';
import { MBox } from '../../motion/MotionBox';
import { container, item } from '../../motion/transitions';

/**
 * ? Cards include: tech stack Array, name, description, overall own rating
 * ! check the render methods of cards. Should come from a local json array in ./data folder
 * * Props: array of projects
 */

export const ProjectCards = ({ data }: any) => {
  const animation = { scale: 1.04 };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {data?.map(({ node }: any, index: string) => (
        <motion.div variants={item} key={index}>
          <Box as="a" onClick={() => window.open(`${node.url}`)}>
            <MBox
              height="auto"
              width="auto"
              borderLeft={`4px solid ${node.color}`}
              shadow="md"
              my={5}
              rounded="md"
              py={1}
              animation={animation}
            >
              <Flex p={5} direction="column">
                <Stack direction={['column', 'row', 'row', 'row']} align="center">
                  <img
                    alt={node.language}
                    src={node.icon.childImageSharp.fixed.src}
                    width={35}
                    height={35}
                  />
                  <Stack mb="3" direction={['column', 'row', 'row', 'row']}>
                    <Tooltip
                      placement="auto"
                      bg={useColorModeValue('black', 'white')}
                      color={useColorModeValue('white', 'black')}
                      aria-label="A tooltip"
                      label="Github Link"
                    >
                      <Box as="a" fontSize="xl" onClick={() => window.open(node.url)}>
                        {node.name}
                      </Box>
                    </Tooltip>
                    {node.tech.map((itm, idx) => (
                      <Tag key={idx} bg={node.color} p={3.7} rounded="md">
                        <Heading size="sm" color="white">
                          {itm}
                        </Heading>
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
      ))}
    </motion.div>
  );
};
