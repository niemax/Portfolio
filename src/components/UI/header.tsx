import * as React from "react";
import { Link } from "gatsby";
import {
  Box,
  Flex,
  IconButton,
  HStack,
  useColorMode,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { HiOutlineMenuAlt1 as BurgerIcon, HiX } from "react-icons/hi";
import { WiDaySunny } from "react-icons/wi";
import { FaGithub, FaMoon } from "react-icons/fa";

import { NavLink } from "../UI/Atoms/NavLink";
import { Memoji } from "../UI/Atoms/Memoji";
import { HeaderProps } from "../../interfaces";
import { windowOpen } from "../../utility/helpers/windowOpen";

const Header = ({ siteTitle }: HeaderProps) => {
  const [display, changeDisplay] = React.useState<string>("none");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav">
      <Flex
        align="center"
        bg={useColorModeValue("white", "dark")}
        shadow="lg"
        h="auto"
        py={4}
        justify="center"
      >
        <Flex display={["none", "none", "flex", "flex"]}>
          <Link to="/">
            <Memoji width={10} height={10} padding={1.5} />
          </Link>
          <NavLink fontSize={18} />
        </Flex>

        <HStack ml={[40, 80, 60, 72]} justify="space-between">
          <Tooltip
            placement="auto"
            bg={useColorModeValue("black", "white")}
            color={useColorModeValue("white", "black")}
            aria-label="Theme"
            label={useColorModeValue("dark mode", "light mode")}
          >
            <IconButton
              color={"#FFD632"}
              variant="ghost"
              fontSize={colorMode === "light" ? 18 : 24}
              aria-label="toggle theme mode"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <FaMoon /> : <WiDaySunny />}
              _hover={{ bg: useColorModeValue("navLightHover", "navDarkHover") }}
            />
          </Tooltip>
          <IconButton
            variant="ghost"
            as="a"
            fontSize={20}
            aria-label="github icon"
            icon={<FaGithub />}
            _hover={{ bg: "#6e5494" }}
            onClick={() => windowOpen("https://github.com/niemax")}
          />
          <IconButton
            mt={2}
            ml={5}
            fontSize={28}
            aria-label="Open menu"
            icon={<BurgerIcon />}
            display={["flex", "flex", "none", "none"]}
            onClick={() => changeDisplay("flex")}
          />
        </HStack>
        <Box align="center" justify="center">
          <Flex
            w="100vw"
            h="100vh"
            pos="fixed"
            zIndex={20}
            top="0"
            left="0"
            overflowY="auto"
            justify="center"
            align="center"
            direction="column"
            bg={useColorModeValue("#F7F7F7", "#151B23")}
            display={display}
          >
            <IconButton
              mt={2}
              fontSize={36}
              mb={20}
              aria-label="Close menu"
              size="lg"
              icon={<HiX />}
              onClick={() => changeDisplay("none")}
            />
            <Link to="/" onClick={() => changeDisplay("none")}>
              <Memoji width={20} height={20} padding={1.5} />
            </Link>
            <NavLink fontSize={28} padding={14} onClick={() => changeDisplay("none")} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
