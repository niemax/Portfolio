import React from "react";
import { Heading } from "@chakra-ui/react";

export const Story: React.FC = () => (
  <>
    <Heading mb={6}>What's my story?</Heading>
    <Heading size="md">
      Jumped into the world of <strong>Information Technology</strong> in <strong>2019</strong>.{" "}
      {"\n"} Ever since it has been the one thing that I'm super <strong>passionate</strong> about.
      Always looking for new creative ways to build accessible and smooth software for all kinds of
      people with all kinds of end devices. I'm always eager to learn, especially from more
      experienced programmers. Constantly trying to improve in writing <strong>clean code</strong>.
    </Heading>
  </>
);
