import React from "react";
import { Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";
import { otherItem, otherTransition } from "../motion/transitions";

interface LikingsProps {}

export const Likings: React.FC<LikingsProps> = ({}) => {
  return (
    <Box mt="10" mb="4">
      <motion.div variants={otherTransition} initial="hidden" animate="show">
        <motion.div variants={otherItem}>
          <Heading mb="4">What I like</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="cyan" fontSize={22} />
              Forest Walks 🌲 🌲 🌲
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="cyan" fontSize={22} />
              Green Tea 🍵
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="cyan" fontSize={22} />
              Coding (obviously) 🤓
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="cyan" fontSize={22} />
              Hitting the gym 🦾
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="cyan" fontSize={22} />
              My Girlfriend ❤️‍🔥
            </ListItem>
          </List>
        </motion.div>
      </motion.div>
    </Box>
  );
};