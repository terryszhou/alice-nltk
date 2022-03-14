import * as React from "react";
import { Heading, Stack, Flex, Text } from "@chakra-ui/react";

export const HomeHeading = () => {
  return (
    <Stack position={"relative"} w={"30vw"} h={"30vw"}>
      <Heading fontFamily={"Nunito"}>
        <Text fontSize={"4vw"} position={"absolute"}>
          DOWN
        </Text>
        <Text
          fontSize={"2vw"}
          left={"2%"}
          position={"absolute"}
          top={"13%"}>
          the
        </Text>
        <Text
          color={"green.500"}
          fontFamily={"Chakra Petch"}
          fontSize={"3.5vw"}
          left={"12%"}
          position={"absolute"}
          top={"13%"}>
          {`{DATA}`}
        </Text>
        <Text
          fontSize={"5vw"}
          left={"2%"}
          position={"absolute"}
          top={"18%"}>
          R
        </Text>
        <Text
          fontSize={"2.5vw"}
          left={"13%"}
          position={"absolute"}
          top={"25%"}>
          abbit
        </Text>
        <Text
          fontSize={"2.5vw"}
          left={"36%"}
          position={"absolute"}
          top={"25%"}>
          hol
        </Text>
        <Text
          fontSize={"5vw"}
          left={"48%"}
          position={"absolute"}
          top={"18%"}>
          E
        </Text>
      </Heading>
    </Stack>
  );
};
