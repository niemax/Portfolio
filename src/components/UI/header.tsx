import * as React from "react";
import { Link } from "gatsby";
import {
  Box,
  Stack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Tooltip,
  Container,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HiOutlineMenuAlt1 as BurgerIcon, HiX } from "react-icons/hi";
import { WiDaySunny } from "react-icons/wi";
import { FaGithub, FaMoon } from "react-icons/fa";

import { NavLink } from "../UI/Atoms/NavLink";
import { Memoji } from "../UI/Atoms/Memoji";
import { windowOpen } from "../../utility/helpers/windowOpen";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      top={0}
      as="nav"
      w="100%"
      h={58}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        display="flex"
        px={[6, 14, 6, 4]}
        py={2}
        maxW="container.md"
        align="center"
        justify="space-between"
      >
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
          <NavLink />
        </Stack>

        <Box flex={1} align="left" display={["flex", "flex", "none", "none"]}>
          <Link to="/">
            <Memoji width={10} height={10} padding={1.5} />
          </Link>
        </Box>
        <Box flex={1} align="right">
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

          <Box display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                icon={<BurgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList direction="column">
                <MenuItem as={NavLink} />
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
