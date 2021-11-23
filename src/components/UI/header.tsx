import * as React from "react";
import { Link } from "gatsby";
import {
  Box,
  Flex,
  Stack,
  IconButton,
  CloseButton,
  HStack,
  useColorMode,
  useColorModeValue,
  Tooltip,
  Container,
} from "@chakra-ui/react";
import { HiOutlineMenuAlt1 as BurgerIcon, HiX } from "react-icons/hi";
import { WiDaySunny } from "react-icons/wi";
import { FaGithub, FaMoon } from "react-icons/fa";

import { NavLink } from "../UI/Atoms/NavLink";
import { Memoji } from "../UI/Atoms/Memoji";
import { windowOpen } from "../../utility/helpers/windowOpen";

const Header = () => {
  const [display, changeDisplay] = React.useState<string>("none");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      top={0}
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container display="flex" py={2} px={10} maxW="container.md">
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link to="/">
            <Memoji width={10} height={10} padding={1.5} />
          </Link>
          <NavLink fontSize={18} />
        </Stack>
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
        <Box align="center" justify="center">
          <Flex
            w="100vw"
            h="100vh"
            pos="fixed"
            zIndex={20}
            top="0"
            left="0"
            overflowY="hidden"
            justify="center"
            align="center"
            direction="column"
            bg={useColorModeValue("#F7F7F7", "#151B23")}
            display={display}
          >
            <CloseButton
              mt={2}
              fontSize={28}
              mb={20}
              aria-label="Close menu"
              size="lg"
              align="right"
              onClick={() => changeDisplay("none")}
            />
            <Link to="/" onClick={() => changeDisplay("none")}>
              <Memoji width={20} height={20} padding={1.5} />
            </Link>
            <NavLink fontSize={28} padding={14} onClick={() => changeDisplay("none")} />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
