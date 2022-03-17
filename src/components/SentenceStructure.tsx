import { Box, Code, Flex, Image, Stack, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import { HeroShell } from "./HeroShell";
import { PageProps } from "../helpers/interfaces";
import { figureData } from "../data/figureData";
import { BarChart, Bar, Label, Cell, XAxis, YAxis, CartesianGrid, Tooltip, TooltipProps, Legend, ResponsiveContainer } from 'recharts';
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";


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
        marginY={"10%"}
        spacing={5}>
        <Image
          borderRadius={5}
          maxWidth={"100%"}
          src={"/images/alice_chap_sent_count_graph.png"} />
        <ResponsiveContainer width={"100%"} height={300}>
          <BarChart
            width={500}
            height={300}
            data={figureData[0].data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5 }}>
            <XAxis dataKey={"label"} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>


        {/* <Image
          borderRadius={5}
          maxWidth={"100%"}
          src={"/images/alice_avg_sent_length_graph.png"} /> */}
      </Stack>
    </HeroShell>
  );
};

export const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (  
      <Stack fontFamily={"var(--chakra-fonts-mono)"}>
        <Code children={`Chapter ${label}`} />
        <Code children={`${payload[0].value} sentences`} />
      </Stack>
    );
  };
  return null;
};
