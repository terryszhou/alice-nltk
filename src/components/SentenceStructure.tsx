import { Code, Stack, Text, useColorModeValue as colorMode } from "@chakra-ui/react";
import * as React from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, TooltipProps, ResponsiveContainer } from 'recharts';
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";

import { figureData } from "../data/figureData";
import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";

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
        width={"100%"}
        marginY={"10%"}
        spacing={5}>
        <ResponsiveContainer height={300} width={"100%"}>
          <BarChart data={figureData[0].data}>
            <text
              dominantBaseline="central"
              fill={colorMode("black", "white")}
              textAnchor="middle"
              x={165}
              y={5}>
              <tspan fontFamily={"Nunito"} fontSize="14">{figureData[0].title}</tspan>
            </text>
            <XAxis dataKey={"label"} />
            <YAxis />
            <Tooltip content={<CustomTooltip valueLabel={figureData[0].valueLabel} />} cursor={false} />
            <Bar dataKey="value" fill={figureData[0].fillColor} radius={[5, 5, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer height={300} width={"100%"}>
          <BarChart data={figureData[1].data}>
            <text
              dominantBaseline="central"
              fill={colorMode("black", "white")}
              textAnchor="middle"
              x={165}
              y={5}>
              <tspan fontFamily={"Nunito"} fontSize="14">{figureData[1].title}</tspan>
            </text>
            <XAxis dataKey={"label"} />
            <YAxis />
            <Tooltip content={<CustomTooltip valueLabel={figureData[1].valueLabel} />} cursor={false} />
            <Bar dataKey="value" fill={figureData[1].fillColor} radius={[5, 5, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </Stack>
    </HeroShell>
  );
};

interface TooltipLabels {
  valueLabel: string,
};

export const CustomTooltip = ({
  active,
  payload,
  label,
  valueLabel
}: TooltipProps<ValueType, NameType> & TooltipLabels) => {
  if (active && payload && payload.length) {
    return (  
      <Stack fontFamily={"var(--chakra-fonts-mono)"}>
        <Code children={`Chapter ${label}`} />
        <Code children={`${payload[0].value} ${valueLabel}`} />
      </Stack>
    );
  };
  return null;
};
