import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { IMemojiProps } from "../../../interfaces";
import { MotionBox } from "../../motion/MotionBox";

export const Memoji = (props: IMemojiProps) => {
  return (
    <MotionBox
      bg="green"
      rounded="full"
      h={props.height}
      w={props.width}
      ml={props.ml}
      p={props.padding}
      whileHover={{ scale: 1.3 }}
    >
      <StaticImage src="../../../staticImages/memoji.png" alt="memoji" placeholder="blurred" />
    </MotionBox>
  );
};
