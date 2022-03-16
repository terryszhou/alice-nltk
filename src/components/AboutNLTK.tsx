import * as React from "react";
import {
  Image,
  Box,
  Flex,
  Stack,
  Text,
  List,
  ListItem,
  useColorModeValue as colorMode,
  Heading
} from "@chakra-ui/react";

import { aboutNLTKData } from "../data/aboutNLTKData";
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
            Natural Language Processing, or NLP, is a computer's ability to understand spoken and written language as humans do. It's a cornerstone of AI, and has deep roots in data analysis and algorithms. 
          </Text>
          <Text>
            For this project, I'll be using the Natural Language Toolkit, or NLTK: a top platform for Python-based NLP. There are three submodules of the NLTK library that are the focus of this project:
          </Text>
          <List spacing={2}>
            {aboutNLTKData.map((e, i) => (
              <ListItem
                alignItems={"center"}
                color={colorMode("rgba(44,44,44,0.8)","rgba(180,180,180,0.8)")}
                display={"flex"}
                fontFamily={"var(--chakra-fonts-nunito)"}
                key={i}>
                <Image src={"/heart-logo.png"} width={4} />
                <Text marginLeft={2} marginY={2}>
                  {e}
                </Text>
              </ListItem> ))}
          </List>
          <Text>
            But first, let's learn a little more about our text...
          </Text>
        </Stack>
      </Box>
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
          {/* <Image
            src={"/frame.png"}
            maxWidth={{ base: 250*1.4, lg: 350*1.4 }}
            position={"absolute"} /> */}
          <Image
            borderRadius={5}
            maxWidth={{ base: 250, lg: 350 }}
            src={"/eaglet.jpg"} />
        </Box>
        <Stack marginTop={5} >
          <Heading fontFamily={"Nunito"} fontSize={"lg"} fontStyle={"italic"}>
            “Speak English!” said the Eaglet. “I don’t know the meaning of half those long words, and, what’s more, I don’t believe you do either!”
          </Heading>
          <Text fontFamily={"Nunito"} fontStyle={"italic"} textAlign={"right"}>
            - "Alice's Adventures in Wonderland"
          </Text>
          {`, `}
          <Text fontFamily={"Nunito"} fontWeight={"bold"} textAlign={"right"}>
            Chapter III: A Caucus-Race and a Long Tale
          </Text>
        </Stack>
      </Flex>
    </HeroShell>
  );
};
