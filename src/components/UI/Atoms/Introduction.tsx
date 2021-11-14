import React from 'react';
import { Box, useColorModeValue, Heading } from '@chakra-ui/react';
import { LineBreak } from './LineBreak';

interface IntroductionProps {}

export const Introduction: React.FC<IntroductionProps> = ({}) => (
  <>
    <Heading mt="10">
      Hello{' '}
      <Box className="wave" as="span">
        👋
      </Box>
    </Heading>
    <LineBreak width={'7rem'} mt={5} />
    <Box>
      <Heading size="md">
        I'm{' '}
        <Box as="span" fontWeight="800" color="green">
          Axel,{' '}
        </Box>
        software developer from Helsinki, Finland. My vision is to make the web accessible and
        enjoyable for everyone. Love working in the Javascript ecosystem - especially React (Gatsby,
        NextJS) & NodeJS.
      </Heading>
    </Box>
  </>
);
