import {
  Flex, Heading, HStack, Image,
  Stack, Text, useColorModeValue as colorMode,
} from "@chakra-ui/react";
import * as React from "react";

import { fadeRight, float, typeWriter } from "../helpers/animations";
import { useAnim } from "../hooks/useAnim";

export const HomeHeading = () => {
  const floatAnim: string | undefined = useAnim(`${float} 2s infinite`);
  const fadeRightAnim1: string | undefined = useAnim(`${fadeRight} 250ms 250ms forwards`);
  const fadeRightAnim2: string | undefined = useAnim(`${fadeRight} 250ms 400ms forwards`);
  const fadeRightAnim3: string | undefined = useAnim(`${fadeRight} 250ms 550ms forwards`);
  const typeWriterAnim: string | undefined = useAnim(`${typeWriter} 1s steps(20, end) 750ms forwards`);
  const purpleShadow: string = colorMode(
    "none","drop-shadow(0 0 5px rgb(159,43,122))" );
  const redShadow: string = colorMode(
    "none","drop-shadow(0 3px 5px red) drop-shadow(0 -5px 5px goldenrod)" );

  return (
    <HStack marginRight={20} marginTop={-10} spacing={{ base: -10, lg: -4 }}>
      <Stack
        align={"center"}
        minWidth={300}
        position={"relative"}
        spacing={{ base: -4, lg: -6 }}>
        <Heading
          animation={fadeRightAnim1}
          fontFamily={"Nunito"}
          fontSize={{ base: "5xl", lg: "7xl" }}
          opacity={0}>
          DOWN
        </Heading>
        <Flex
          animation={fadeRightAnim2}
          opacity={0}
          paddingLeft={{ base: 20, lg: 10 }}>
          <Text
            fontFamily={"Nunito"}
            fontSize={{ base: "2xl", lg: "3xl" }}
            marginTop={2}>
            the
          </Text>
          <Text
            animation={typeWriterAnim}
            borderRight={"0.25em solid rgba(0,0,0,0)"}
            color={"rgb(159,43,122)"}
            filter={purpleShadow}
            fontFamily={"Chakra Petch"}
            fontSize={{base: "4xl", lg: "6xl"}}
            opacity={"100%"}
            overflow={"hidden"}
            whiteSpace={"nowrap"}
            width={"0%"}>
            {`{DATA}`}
          </Text>
        </Flex>
        <Flex
          alignItems={"flex-end"}
          animation={fadeRightAnim3}
          bottom={{ base: "-50%", lg: "-40%" }}
          left={{ base: "25%", lg: "15%" }}
          opacity={0}
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
          filter={redShadow}
          src={"/heart-logo.png"}
          width={{ base: 5, lg: 8 }} />
      </HStack>
    </HStack>
  );
};
