import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import { LineBreak } from "./LineBreak";

interface StoryProps {}

export const Story: React.FC<StoryProps> = ({}) => {
  return (
    <Box>
      <Heading>What's my story?</Heading>
      <LineBreak width="19rem" mb={5} />
      <Heading size="md">
        Jumped into the world of Information Technology in 2019 as a wandered. Ever since it has
        been the one thing that I'm super passionate about and want to improve myself at a
        never-ending pace. Always looking for new creative ways to provide accessible and smooth
        software for all kinds of people. Love working as a team and taking into account everyones'
        vision. Also constantly trying to better myself on clean code principles.
      </Heading>
    </Box>
  );
};
