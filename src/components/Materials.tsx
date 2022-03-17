import * as React from "react";
import { Box, Code, Stack, Text, Flex, Image, Heading, Button } from "@chakra-ui/react";

import { HeroShell } from "./HeroShell";
import { PageProps } from "../helpers/interfaces";

export const Materials = ({ visRef, visible }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <HeroShell title={"Text & Imports"} visRef={visRef} loaded={loaded}>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        marginBottom={"10%"}
        marginTop={"10%"}>
        <Box
          alignItems={"center"}
          borderRadius={5}
          display={"flex"}
          justifyContent={"center"}
          padding={2}
          position={"relative"}
          role={"group"}
          transition={"200ms ease-out"}
          width={"fit-content"}>
          <Image
            borderRadius={5}
            maxWidth={{ base: 250, lg: 350 }}
            src={"/king.jpg"} />
        </Box>
        <Stack marginTop={5} maxWidth={{ sm: "60%", lg: "80%" }}>
          <Heading
            fontFamily={"Nunito"}
            fontSize={"lg"}
            fontStyle={"italic"}
            textAlign={"justify"}>
            “Begin at the beginning,” the King said gravely, “and go on till you come to the end: then stop.”
          </Heading>
          <Text
            fontFamily={"Nunito"}
            fontWeight={"bold"}
            textAlign={"right"}>
            - Chapter XII: Alice's Evidence
          </Text>
        </Stack>
      </Flex>
      <Stack
        align={"center"}
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={{ base: "sm", lg: "md" }}
        spacing={5}
        textAlign={"justify"}>
        <Text>
          <Text as={"span"} fontStyle={"italic"}>
            Alice's Adventures in Wonderland
          </Text>
          {`, or `}
          <Text as={"span"} fontStyle={"italic"}>
            {`Alice in Wonderland `}
          </Text>
          as it is more commonly known, is an English children's novel written in 1865 by Lewis Carroll, with illustrations by John Tenniel.
        </Text>
        <Text>
          In 1991 it was made available for free by Project Gutenberg. I will be using a slightly modified version of that text for this project, available for download below:
        </Text>
        <Button
          as={"a"}
          backgroundColor={"transparent"}
          border={"1px solid rgb(159,43,122)"}
          color={"rgb(159,43,122)"}
          cursor={"pointer"}
          fontFamily={"var(--chakra-fonts-mono)"}
          fontSize={13}
          href={"https://s3.us-west-1.amazonaws.com/terryszhou.com/alice.txt"}
          maxWidth={100}
          target={"_blank"}
          _focus={{ boxShadow: "none" }}
          _hover={{ backgroundColor: "rgb(159,43,122)", color: "white" }}>
          alice.txt
        </Button>
        <Text>The following are all the code imports used in this project:</Text>
        <Stack opacity={.8} textAlign={"left"} width={"80%"}>
          <Code children={"import matplotlib.pyplot as plt"} />
          <Code children={"import pandas as pd"} />
          <Code children={"import seaborn as sns"} />
          <Code children={"import string"} />
          <Code children={"import nltk"} />
          <Code children={"import numpy as np"} />
          <Code children={"from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer"} />
        </Stack>
      </Stack>
    </HeroShell>
  );
};
