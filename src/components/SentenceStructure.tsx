import { Code, Stack, Text } from "@chakra-ui/react";
import * as React from "react";

import { figureDataOne } from "../data/figureData";
import { DataGraph } from "./DataGraph";
import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";

export const SentenceStructure = ({ visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <HeroShell
      title={"NLTK Tokens: How Long is the Book?"}
      visRef={visRef}
      loaded={loaded}>
      <Stack
        align={"center"}
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={{ base: "sm", lg: "md" }}
        spacing={5}
        textAlign={"justify"}>
        <Text>
          Tokenization is one of NLTK's most basic functionalities. It involves breaking strings down into smaller substrings, or 'tokens'. Strings can be tokenized into sentences, words, or individual characters.
        </Text>
        <Text>
          For instance, the following commands allow us to break the text down into sentences:
        </Text>
        <Stack textAlign={"left"} width={"80%"}>
          <Code children={'alice_text = open("alice.txt", "r").read()'} />
          <Code children={'alice_sentences = nltk.sent_tokenize(alice_text)'} />
        </Stack>
        <Text>
          There are only 973 sentences in the text, split amongst 12 chapters. Most modern publication coaches advise an average sentence length of 14-20 words/sentence.
        </Text>
        <Text>
          As we can see from the data, Alice in Wonderland's sentences average in the 40-50 word range—a far cry from modern writing styles. We can see this clearly enough from the very first sentence:
        </Text>
      </Stack>
      <Stack
        align={"center"}
        width={"100%"}
        marginY={"10%"}
        spacing={5}>
        {figureDataOne.map((e,i) => (
          <DataGraph
            code={e.code}
            data={e.data}
            fig={e.fig}
            fillColor={e.fillColor}
            key={i}
            title={e.title}
            valueLabel={e.valueLabel} /> ))}
      </Stack>
    </HeroShell>
  );
};
