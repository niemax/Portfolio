import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { LineBreak } from "./LineBreak";

export const Introduction: React.FC = () => (
  <>
    <Heading mt="10">
      Hello{" "}
      <Box className="wave" as="span">
        👋
      </Box>
    </Heading>
    <LineBreak width={"6rem"} marginTop={2} />
    <Box>
      <Heading size="md">
        I'm{" "}
        <Box as="span" fontWeight="800" color="green">
          Axel,{" "}
        </Box>
        Software Developer and student from Helsinki. My vision is to make the web accessible and
        enjoyable for everyone. Love working in the <strong>JavaScript</strong> ecosystem -
        especially <strong>React & NodeJS.</strong> Always up for challenges and learning new
        technologies.
      </Heading>
    </Box>
  </>
);
