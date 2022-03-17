import { Code, Heading, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";

export const VaderChapters = ({ visRef, visible }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <HeroShell
      loaded={loaded} 
      title={"VADER Analysis: Chapter by Chapter"}
      visRef={visRef}>
      <Stack
        align={"center"}
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={{ base: "sm", lg: "md" }}
        spacing={5}
        textAlign={"justify"}>
        <Text>
          VADER (or Valence Aware Dictionary and sEntiment Reasoner) is a lexicon-based analytical tool built into NLTK. It allows us to analyze a given text for positive, negative, and neutral sentiment values, and score them accordingly. Like so:
        </Text>
        <Stack textAlign={"left"} width={"100%"}>
          <Code children={'sid = SentimentIntensityAnalyzer()'} />
          <Code children={'compound_scores = []'} />
          <Code children={'for sentence in alice_sentences:'} />
          <Code children={'compound_scores.append((sentence.replace("\n", " "),'} style={{ textIndent: 20 }} />
          <Code children={'sid.polarity_scores(sentence)["compound"],'} style={{ textIndent: 20 }} />
          <Code children={'sid.polarity_scores(sentence)["pos"],'} style={{ textIndent: 20 }} />
          <Code children={'sid.polarity_scores(sentence)["neg"],'} style={{ textIndent: 20 }} />
          <Code children={'sid.polarity_scores(sentence)["neu"],'} style={{ textIndent: 20 }} />
        </Stack>
        <Text>
          The result is a value between for -1 and 1, with anything between -0.5 and 0.5 considered emotionally neutral.
        </Text>
        <Text>
          We can use this to easily determine the most emotionally negative and positive sentences in the text.
        </Text>
      </Stack>
      <Stack
        align={"center"}
        width={"100%"}
        spacing={5}>
        <Heading
          fontFamily={"Nunito"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          textAlign={"center"}>
          The most negative sentence:
        </Heading>
        <Text as={"cite"} style={{ textIndent: 20 }}>
          '“You’re nothing but a pack of cards!”  At this the whole pack rose up into the air, and came flying down upon her: she gave a little scream, half of fright and half of anger, and tried to beat them off, and found herself lying on the bank, with her head in the lap of her sister, who was gently brushing away some dead leaves that had fluttered down from the trees upon her face.'
        </Text>
        <Text>Compound Score: -0.9657</Text>
        <Heading
          fontFamily={"Nunito"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          textAlign={"center"}>
          The most positive sentence:
        </Heading>
        <Text as={"cite"} style={{ textIndent: 20 }}>
          'But her sister sat still just as she left her, leaning her head on her hand, watching the setting sun, and thinking of little Alice and all her wonderful Adventures, till she too began dreaming after a fashion, and this was her dream:—  First, she dreamed of little Alice herself, and once again the tiny hands were clasped upon her knee, and the bright eager eyes were looking up into hers—she could hear the very tones of her voice, and see that queer little toss of her head to keep back the wandering hair that _would_ always get into her eyes—and still as she listened, or seemed to listen, the whole place around her became alive with the strange creatures of her little sister’s dream.'
        </Text>
        <Text>Compound Score: 0.9745</Text>
      </Stack>
    </HeroShell>
  );
};
