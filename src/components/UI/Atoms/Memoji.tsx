import React from "react";
import { Center } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { MemojiProps } from "../../../interfaces";

export const Memoji = ({ ...props }: MemojiProps) => {
  return (
    <Center
      bg="green"
      rounded="full"
      h={props.height}
      w={props.width}
      ml={props.ml}
      p={props.padding}
    >
      <StaticImage src="../../../staticImages/memoji.png" alt="memoji" placeholder="blurred" />
    </Center>
  );
};
