import React from "react";
import Seo from "../components/seo";
import { PageScaleFade } from "../components/motion/transitions";
import StoryItem from "../components/UI/Atoms/StoryItem";
import { Flex } from "@chakra-ui/react";

const Story: React.FC = () => (
  <PageScaleFade>
    <Seo title="Developer Story" />
    <StoryItem />
  </PageScaleFade>
);

export default Story;
