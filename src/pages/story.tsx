import React from "react";
import Seo from "../components/seo";
import { PageScaleFade } from "../components/motion/transitions";
import StoryItem from "../components/UI/Atoms/StoryItem";

const Story: React.FC = () => (
  <PageScaleFade>
    <Seo title="Developer Story" />
    <StoryItem />
  </PageScaleFade>
);

export default Story;
