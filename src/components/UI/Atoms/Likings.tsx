import React from "react";
import { Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { otherItem, otherTransition } from "../../motion/transitions";
import { GiForest, GiCoffeeCup, GiGymBag } from "react-icons/gi";
import { CgGirl } from "react-icons/cg";
import { FaCode } from "react-icons/fa";

export const Likings = () => (
  <Box mt="10" mb="4">
    <motion.div variants={otherTransition} initial="hidden" animate="show">
      <motion.div variants={otherItem}>
        <Heading mb="4">What I like</Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={GiForest} color="tealish" fontSize={22} />
            Forests
          </ListItem>
          <ListItem>
            <ListIcon as={GiCoffeeCup} color="tealish" fontSize={22} />
            Green Tea
          </ListItem>
          <ListItem>
            <ListIcon as={FaCode} color="tealish" fontSize={22} />
            Coding (obviously)
          </ListItem>
          <ListItem>
            <ListIcon as={GiGymBag} color="tealish" fontSize={22} />
            The gym
          </ListItem>
          <ListItem>
            <ListIcon as={CgGirl} color="tealish" fontSize={22} />
            My Girlfriend
          </ListItem>
        </List>
      </motion.div>
    </motion.div>
  </Box>
);
