import { Code, Heading, Image, Stack, Text } from "@chakra-ui/react";
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
        align={"left"}
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={"sm"}
        spacing={2}
        textAlign={"justify"}>
        <Text style={{ textIndent: 20 }}>
          We can also apply our VADER analysis to chapters as a whole; as we can see from our Mean Compound Score graph, Alice in Wonderland starts off quite positively with a compound sentiment score of over 0.10. 
        </Text>
        <Text style={{ textIndent: 20 }}>
          Notice the two troughs at Chapter V and Chapter IX. The one in Chapter V makes sense; this is the part in the story where Alice is constantly shifting sizes, and getting into all sorts of misadventures; she gets stuck in a house, attacked by birds, threatened to be burnt alive, etc.
        </Text>
        <Text style={{ textIndent: 20 }}>
          But the trough in Chapter IX is interesting. The chapter is innocuous enough: it mostly involves a conversation between Alice, the Gryphon, and the Mock Turtle. There are two factors to consider here.
        </Text>
        <Text style={{ textIndent: 20 }}>
          Firstly, VADER analysis works based on common words. In this case, it seems that VADER thinks that the 'Mock' in 'Mock Turtle' should be scored negatively, as shown here:
        </Text>
        <Code children={`"You did," said the Mock Turtle.`} fontSize={"xs"} />
        <Code children={`{'neg': 0.359, 'neu': 0.641, 'pos': 0.0, 'compound': -0.4215}`} fontSize={"xs"} />
        <Text style={{ textIndent: 20 }}>
          Secondly, the Mock Turtle spends most of the chapter sobbing. Crying obviously has a negative VADER score, but in the context of the chapter it is used for comedy.
        </Text>
        <Text style={{ textIndent: 20 }}>
          This points out an interesting gap in VADER analysis: as of yet, it is a literal technique. It cannot capture situational irony, nuance, or satire.
        </Text>
      </Stack>
      <Stack
        align={"center"}
        width={"100%"}
        spacing={5}>
        <Image src={"/images/alice_compound_graph.png"} />
        <Image src={"/images/alice_chap_vader_sent_graph.png"} />
      </Stack>
    </HeroShell>
  );
};
