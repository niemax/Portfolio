import * as React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, IconButton, HStack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { HiOutlineMenuAlt1 as BurgerIcon, HiX } from 'react-icons/hi';
import { WiDaySunny } from 'react-icons/wi';
import { FaGithub, FaMoon } from 'react-icons/fa';

import { NavLink } from '../UI/Atoms/NavLink';
import { Memoji } from '../UI/Atoms/Memoji';
import { HeaderProps } from '../../interfaces';

const Header = ({ siteTitle }: HeaderProps) => {
  const [display, changeDisplay] = React.useState<string>('none');
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        pos="fixed"
        right="0"
        top="0"
        left="0"
        align="center"
        justify="center"
        bg={useColorModeValue('white', 'dark')}
        shadow="lg"
        h="auto"
        py={3}
      >
        <Flex display={['none', 'none', 'flex', 'flex']} align="center" px={14}>
          <Link to="/">
            <Memoji width={12} height={12} padding={1.5} />
          </Link>
          <NavLink fontSize={18} />
        </Flex>
        <HStack spacing={3}>
          <IconButton
            color={'#FFD632'}
            variant="ghost"
            fontSize={26}
            aria-label="toggle theme mode"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <FaMoon /> : <WiDaySunny />}
            _hover={{ bg: useColorModeValue('navLightHover', 'navDarkHover') }}
          />
          <IconButton
            variant="ghost"
            as="a"
            fontSize={26}
            aria-label="github icon"
            icon={<FaGithub />}
            _hover={{ bg: useColorModeValue('navLightHover', 'navDarkHover') }}
            onClick={() => window.open('https://github.com/niemax')}
          />
          <IconButton
            mt={2}
            ml={5}
            fontSize={36}
            aria-label="Open menu"
            icon={<BurgerIcon />}
            display={['flex', 'flex', 'none', 'none']}
            onClick={() => changeDisplay('flex')}
          />
        </HStack>
      </Flex>
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
          flexDir="column"
          bg={useColorModeValue('#F7F7F7', '#151B23')}
          display={display}
        >
          <Flex flexDir="column" align="center" justify="center">
            <NavLink fontSize={30} padding={14} />
          </Flex>
          <IconButton
            mt={2}
            mr={2}
            fontSize={36}
            aria-label="Close menu"
            size="lg"
            icon={<HiX />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;