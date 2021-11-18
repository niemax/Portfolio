import { IconButton, HStack } from "@chakra-ui/react";
import { FaGithub, FaDev, FaStackOverflow, FaLinkedin } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import React from "react";
import { windowOpen } from "../../../utility/helpers/windowOpen";

export const Socials: React.FC = () => {
  return (
    <HStack spacing={4}>
      <IconButton
        as="a"
        fontSize={20}
        variant="ghost"
        aria-label="Github Link"
        icon={<FaGithub />}
        _hover={{ bg: "#6e5494" }}
        onClick={() => windowOpen("https://github.com/niemax")}
      />
      <IconButton
        as="a"
        fontSize={20}
        variant="ghost"
        aria-label="dev.to link"
        icon={<FaDev />}
        _hover={{ bg: "gray" }}
        onClick={() => windowOpen("https://dev.to/axel_nieminen_072275fab50")}
      />
      <IconButton
        as="a"
        variant="ghost"
        fontSize={20}
        aria-label="stackoverflow link"
        icon={<FaStackOverflow />}
        _hover={{ bg: "#f48024" }}
        onClick={() => windowOpen("https://stackoverflow.com/users/13197952/niemax")}
      />
      <IconButton
        as="a"
        variant="ghost"
        fontSize={20}
        aria-label="linkedin link"
        icon={<FaLinkedin />}
        _hover={{ bg: "#0077b5" }}
        onClick={() => windowOpen("https://www.linkedin.com/in/axel-nieminen-06a580196/")}
      />
      <IconButton
        as="a"
        variant="ghost"
        fontSize={20}
        aria-label="mail link"
        icon={<ImMail />}
        _hover={{ bg: "red" }}
        onClick={() => windowOpen("mailto:axel.nieminen@mac.com")}
      />
    </HStack>
  );
};
