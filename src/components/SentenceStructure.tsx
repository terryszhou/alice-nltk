import { Box, Flex, Image, Stack, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import { HeroShell } from "./HeroShell";
import { PageProps } from "../helpers/interfaces";

export const SentenceStructure = ({ visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <HeroShell title={"NLTK Tokens: How Long is the Book?"} visRef={visRef} loaded={loaded}>
      <Stack
        align={"center"}
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={{ base: "sm", lg: "md" }}
        spacing={5}
        textAlign={"justify"}>
        <Text>
          <Text as={"span"} fontStyle={"italic"}>Alice's Adventures in Wonderland</Text>
          {`, or `}
          <Text as={"span"} fontStyle={"italic"}>Alice in Wonderland </Text>
          as it is more commonly known, is an English children's novel written in 1865 by Lewis Carroll, with illustrations by John Tenniel.
        </Text>
        <Text>
          In 1991 it was made available for free by Project Gutenberg. I will be using a slightly modified version of that text for this project, available for download below:
        </Text>
      </Stack>
      <Stack
        align={"center"}
        marginY={"10%"}
        spacing={5}>
        <Image
          borderRadius={5}
          maxWidth={"100%"}
          src={"/images/alice_chap_sent_count_graph.png"} />
        <Image
          borderRadius={5}
          maxWidth={"100%"}
          src={"/images/alice_avg_sent_length_graph.png"} />
      </Stack>
    </HeroShell>
  );
};
