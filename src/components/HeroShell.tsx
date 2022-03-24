import { Container, Flex, Heading, Stack } from '@chakra-ui/react';
import * as React from "react";

interface HeroShellProps {
  children?: any,
  loaded?: boolean,
  title?: string
  visRef?: any,
};

export const HeroShell = ({
  children,
  loaded,
  title,
  visRef,
}: HeroShellProps) => {
  return (
    <Container
      maxW={{ base: "95%", sm: "85%", lg: "80%", xl: "70%" }}
      minHeight={{ base: "none", lg: "100vh" }}
      opacity={loaded ? 1 : 0}
      ref={visRef}
      transition={"500ms 200ms ease-out"}>
      <Stack
        align={'center'}
        direction={{ base: 'column', md: 'row' }}
        paddingY={18}
        paddingTop={"7.5%"}
        spacing={{ base: 8, md: 10 }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }} position={"relative"}>
          <Stack position={"relative"} spacing={3}>
            <Heading
              fontFamily={"var(--chakra-fonts-nunito)"}
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
