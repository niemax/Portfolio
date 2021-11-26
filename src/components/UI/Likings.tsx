import React from "react";
import { Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";
import { otherItem, otherTransition } from "../motion/transitions";

export const Likings = () => (
  <Box mt="10" mb="4">
    <motion.div variants={otherTransition} initial="hidden" animate="show">
      <motion.div variants={otherItem}>
        <Heading mb="4">What I like</Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#155E63" fontSize={22} />
            Forests 🌲 🌲 🌲
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#155E63" fontSize={22} />
            Green Tea 🍵
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#155E63" fontSize={22} />
            Coding (obviously) 🤓
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#155E63" fontSize={22} />
            Hitting the gym 🦾
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#155E63" fontSize={22} />
            My Girlfriend ❤️‍🔥
          </ListItem>
        </List>
      </motion.div>
    </motion.div>
  </Box>
);
