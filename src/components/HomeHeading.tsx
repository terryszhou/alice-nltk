import * as React from "react";
import {
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue as colorMode,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

import { float } from "../helpers/animations";

export const HomeHeading = () => {
  const prefersReducedMotion: boolean = usePrefersReducedMotion();
  const floatAnim: string | undefined = prefersReducedMotion ? undefined : `${float} 2s infinite`;
  const greenShadow: string = colorMode("none","drop-shadow(0 0 5px green)");

  return (
    <HStack marginRight={20} spacing={{ base: -10, lg: -4 }}>
      <Stack
        align={"center"}
        minWidth={300}
        position={"relative"}
        spacing={-6}>
        <Heading fontFamily={"Nunito"} fontSize={{ base: "5xl", lg: "7xl" }}>
          DOWN
        </Heading>
        <Flex paddingLeft={{ base: 20, lg: 10 }}>
          <Text
            fontFamily={"Nunito"}
            fontSize={{ base: "2xl", lg: "3xl" }}
            marginTop={2}>
            the
          </Text>
          <Text
            color={"green.500"}
            filter={greenShadow}
            fontFamily={"Chakra Petch"}
            fontSize={{base: "4xl", lg: "6xl"}}>
            {`{DATA}`}
          </Text>
        </Flex>
        <Flex
          alignItems={"flex-end"}
          bottom={{ base: "-50%", lg: "-40%" }}
          left={{ base: "25%", lg: "15%" }}
          position={"absolute"} 
          width={"max-content"}>
          <Heading fontFamily={"Nunito"} fontSize={{ base: "7xl", lg: "8xl" }}>
            R
          </Heading>
          <Text
            fontFamily={"Nunito"}
            fontSize={{ base: "5xl", lg: "6xl" }}
            marginBottom={1}>
            abbit hol
          </Text>
          <Heading fontFamily={"Nunito"} fontSize={{ base: "7xl", lg: "8xl" }}>
            E
          </Heading>
        </Flex>
      </Stack>
      <HStack paddingBottom={{ base: 2, lg: 0 }}>
        <Image
          filter={colorMode("none","invert(1)")}
          src={"/white-rabbit.png"}
          width={{ base: 16, lg: 20 }} />
        <Image
          animation={floatAnim}
          src={"/heart-logo.png"}
          width={{ base: 5, lg: 8 }} />
      </HStack>
    </HStack>
  );
};
