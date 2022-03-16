import * as React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as uCMV, 
} from '@chakra-ui/react';

interface HeroShellProps {
  visRef?: any,
  children?: any,
  title?: string
  loaded?: boolean,
};

export const HeroShell = ({ title, visRef, children, loaded }: HeroShellProps) => {
  return (
    <Container
      maxW={{ base: "95%", sm: "85%", lg: "80%", xl: "70%" }}
      opacity={loaded ? 1 : 0}
      ref={visRef}
      transition={"500ms ease-out"}>
      <Stack
        align={'center'}
        direction={{ base: 'column', md: 'row' }}
        paddingY={18}
        paddingTop={"7.5%"}
        spacing={{ base: 8, md: 10 }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }} position={"relative"}>
          <Stack position={"relative"} spacing={3}>
            <Heading
              fontFamily={"var(--chakra-fonts-mono)"}
              fontSize={{ base: 'lg', sm: 'xl', md: "2xl" }}
              fontWeight={"bold"}>
              {title}
            </Heading>
          </Stack>
          <Flex
            align={'center'}
            bottom={3}
            flex={1}
            justify={'center'}
            position={'relative'}
            w={'full'}>
            {children[0]}
          </Flex>
        </Stack>
        <Flex
          align={'center'}
          flex={1}
          justify={'center'}
          position={'relative'}
          w={'full'}>
          {children[1]}
        </Flex>
      </Stack>
    </Container>
  );
};
