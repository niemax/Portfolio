import * as React from 'react';
import { Flex, HStack, useToast } from '@chakra-ui/react';
import Seo from '../components/seo';
import { Memoji } from '../components/UI/Atoms/Memoji';
import { PageScaleFade } from '../components/motion/transitions';
import { Introduction } from '../components/UI/Atoms/Introduction';
import { Recents } from '../components/UI/Atoms/Recents';

const IndexPage = () => {
  const toast = useToast();

  React.useEffect(() => {
    setTimeout(() => {
      toast({
        title: 'Thanks for tuning in!',
        description:
          'If you have any questions, just hit me up at linkedIn: https://www.linkedin.com/in/axel-nieminen-06a580196/',
        isClosable: true,
        duration: 9000,
        status: 'success',
        variant: 'subtle',
        position: 'bottom-left',
      });
    }, 10000);
  }, []);

  return (
    <Flex direction="column" align="center" px={[0, 0, 14, 14]}>
      <PageScaleFade>
        <Seo title="Home" />
        <Flex direction={['column', 'column', 'row']}>
          <Flex direction="column" align="self-start">
            <HStack align="center" justify="center">
              <Memoji width={140} height={140} padding={3} />
            </HStack>
            <Introduction />
            <Recents />
          </Flex>
        </Flex>
      </PageScaleFade>
    </Flex>
  );
};

export default IndexPage;
