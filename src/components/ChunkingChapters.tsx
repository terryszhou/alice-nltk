import { Box, Image, Button, Stack, Text, useToast } from "@chakra-ui/react";
import * as React from "react";

import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";

export const ChunkingChapters = ({ visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <HeroShell
      loaded={loaded}
      title={"Chunking by Chapter"}
      visRef={visRef}>
      <Stack
        align={"center"}
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={"md"}
        spacing={2}
        textAlign={"justify"}>
        <Text style={{ textIndent: 20 }}>
          Chunking is another basic NLP technique. It begins with tokenizing, or breaking down strings into smaller substrings. Then we can assign parts of speech to these substrings. That's chunking in a nutshell.
        </Text> 
        <Text style={{ textIndent: 20 }}>
          Once chunks have been created, we can parse through them to find Unique Named Entities: in other words, characters and places. Usually, we would be doing this hand-in-hand with a lemmatizer function that would remove common words that have been capitalized for literary effect.
        </Text> 
        <Text style={{ textIndent: 20 }}>
          However, one of the many quirks of Alice in Wonderland is that nearly all of the characters have common words as names. As such, a bit of manual entry is required to tell NLTK which capital words are simply words, and which are people.
        </Text>
      </Stack>
      <Stack
        align={"center"}
        width={"100%"}
        spacing={5}>
        <Image src={"/images/alice_top_characters.png"} />
        <Image src={"/images/alice_characters_by_sentiment.png"} />
      </Stack>
    </HeroShell>
  );
};
