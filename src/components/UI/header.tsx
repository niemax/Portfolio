import * as React from 'react';
import { Link } from 'gatsby';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Center,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { HiOutlineMenuAlt1 as BurgerIcon, HiX } from 'react-icons/hi';
import { WiDaySunny } from 'react-icons/wi';
import { FaGithub, FaMoon } from 'react-icons/fa';

import { StaticImage } from 'gatsby-plugin-image';
import { NavLink } from './NavLink';

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => {
  const [display, changeDisplay] = React.useState<string>('none');
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center bg={useColorModeValue('gray', 'dark')} shadow="lg" h={'6vh'} w="auto">
      <Box w={800}>
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <HStack spacing={2} px={[0, 5, 5]}>
            <Box as="a" bg="green" rounded="full" p="1">
              <Link to="/">
                <StaticImage
                  src="../images/memoji.png"
                  alt="memoji "
                  width={40}
                  height={40}
                  placeholder="blurred"
                />
              </Link>
            </Box>
            <NavLink />
            <HStack position="relative" left="300">
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
              />
            </HStack>
          </HStack>
        </Flex>
        <IconButton
          ml="8"
          fontSize={36}
          aria-label="Open menu"
          icon={<BurgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={() => changeDisplay('flex')}
        />
        <Flex
          w="100vw"
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          bg={useColorModeValue('#F7F7F7', '#151B23')}
          display={display}
        >
          <Flex>
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
          <VStack mt="80">
            <Button
              as="a"
              variant="ghost"
              aria-label="about"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              <VStack spacing={20}>
                <NavLink fontSize="36" />
              </VStack>
            </Button>
          </VStack>
        </Flex>
      </Box>
    </Center>
  );
};

export default Header;
