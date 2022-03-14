import { Image, Box, Flex, Stack, Text } from "@chakra-ui/react";
import * as React from "react";

import { HeroShell } from "./HeroShell";
import { PageProps } from "../helpers/interfaces";

export const AboutNLTK = ({ visRef, visible }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <HeroShell title={"What is Natural Language Processing?"} visRef={visRef} loaded={loaded}>
      <Box marginBottom={{ base: "-10%", lg: 0 }}>
        <Stack
          fontFamily={"var(--chakra-fonts-nunito)"}
          fontSize={{ base: "sm", lg: "md" }}
          textAlign={"justify"}>
          <Text>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Text>
        </Stack>
      </Box>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        marginTop={"10%"}>
        <Box
          alignItems={"center"}
          border={"2px solid goldenrod"}
          borderRadius={5}
          display={"flex"}
          justifyContent={"center"}
          padding={2}
          position={"relative"}
          role={"group"}
          transition={"200ms ease-out"}
          width={"fit-content"}
          _hover={{ backgroundColor: "goldenrod" }}>
          <Image
            borderRadius={5}
            maxWidth={{ base: 250, lg: 350 }}
            src={"/natural-language-processing.png"} />
        </Box>
      </Flex>
    </HeroShell>
  );
};
