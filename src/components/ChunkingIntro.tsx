import { Button, Stack, Text, useToast } from "@chakra-ui/react";
import * as React from "react";

import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";

export const ChunkingIntro = ({ visible, visRef }: PageProps) => {
  const toast = useToast();
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [entities, setEntities] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <HeroShell
      loaded={loaded}
      title={"Chunking: What's in a Name?"}
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
        <Button
          backgroundColor={"transparent"}
          border={"1px solid rgb(159,43,122)"}
          color={"rgb(159,43,122)"}
          cursor={"pointer"}
          fontFamily={"var(--chakra-fonts-mono)"}
          fontSize={13}
          maxWidth={100}
          onClick={() => {
            setEntities(!entities);
            toast.closeAll();
            toast({
              duration: 2000,
              isClosable: true,
              status: "success",
              title: entities ? "Tokens Chunked!" : "Unique Named Entities parsed!",
              variant: "subtle", }); }}
          _focus={{ boxShadow: "none" }}
          _hover={{ backgroundColor: "rgb(159,43,122)", color: "white" }}>
          Click Me
        </Button>
      </Stack>
      <Stack
        align={"left"}
        fontFamily={"var(--chakra-fonts-mono)"}
        fontSize={"sm"}
        spacing={2}
        textAlign={"justify"}>
        <Text fontSize={entities ? "2xl" : "10px"}>
          {entities
            ? `['Rabbit', 'Alice']`
            : `[('I', 'PRP'), ('shall', 'MD'), ('be', 'VB'), ('late', 'JJ'), ('!', '.'), ('”', 'NN'), ('(', '('), ('when', 'WRB'), ('she', 'PRP'), ('thought', 'VBD'), ('it', 'PRP'), ('over', 'IN'), ('afterwards', 'NNS'), (',', ','), ('it', 'PRP'), ('occurred', 'VBD'), ('to', 'TO'), ('her', 'PRP$'), ('that', 'IN'), ('she', 'PRP'), ('ought', 'MD'), ('to', 'TO'), ('have', 'VB'), ('wondered', 'VBN'), ('at', 'IN'), ('this', 'DT'), (',', ','), ('but', 'CC'), ('at', 'IN'), ('the', 'DT'), ('time', 'NN'), ('it', 'PRP'), ('all', 'DT'), ('seemed', 'VBD'), ('quite', 'RB'), ('natural', 'JJ'), (')', ')'), (';', ':'), ('but', 'CC'), ('when', 'WRB'), ('the', 'DT'), ('Rabbit', 'NNP'), ('actually', 'RB'), ('_took', 'VBZ'), ('a', 'DT'), ('watch', 'NN'), ('out', 'IN'), ('of', 'IN'), ('its', 'PRP$'), ('waistcoat-pocket_', 'NN'), (',', ','), ('and', 'CC'), ('looked', 'VBD'), ('at', 'IN'), ('it', 'PRP'), (',', ','), ('and', 'CC'), ('then', 'RB'), ('hurried', 'VBD'), ('on', 'IN'), (',', ','), ('Alice', 'NNP'), ('started', 'VBD'), ('to', 'TO'), ('her', 'PRP$'), ('feet', 'NNS'), (',', ','), ('for', 'IN'), ('it', 'PRP'), ('flashed', 'VBD'), ('across', 'IN'), ('her', 'PRP$'), ('mind', 'NN'), ('that', 'IN'), ('she', 'PRP'), ('had', 'VBD'), ('never', 'RB'), ('before', 'RB'), ('seen', 'VBN'), ('a', 'DT'), ('rabbit', 'NN'), ('with', 'IN'), ('either', 'DT'), ('a', 'DT'), ('waistcoat-pocket', 'NN'), (',', ','), ('or', 'CC'), ('a', 'DT'), ('watch', 'NN'), ('to', 'TO'), ('take', 'VB'), ('out', 'IN'), ('of', 'IN'), ('it', 'PRP'), (',', ','), ('and', 'CC'), ('burning', 'VBG'), ('with', 'IN'), ('curiosity', 'NN'), (',', ','), ('she', 'PRP'), ('ran', 'VBD'), ('across', 'IN'), ('the', 'DT'), ('field', 'NN'), ('after', 'IN'), ('it', 'PRP'), (',', ','), ('and', 'CC'), ('fortunately', 'RB'), ('was', 'VBD'), ('just', 'RB'), ('in', 'IN'), ('time', 'NN'), ('to', 'TO'), ('see', 'VB'), ('it', 'PRP'), ('pop', 'VB'), ('down', 'RP'), ('a', 'DT'), ('large', 'JJ'), ('rabbit-hole', 'JJ'), ('under', 'IN'), ('the', 'DT'), ('hedge', 'NN'), ('.', '.')]` }
        </Text>
      </Stack>
    </HeroShell>
  );
};
