import {
  Box,
  Stack,
  Text,
  useColorModeValue as colorMode,
  usePrefersReducedMotion
} from "@chakra-ui/react";
import * as React from "react";

import { myText, ogText } from "../data/mouseTail";
import { scroll } from "../helpers/animations";

export const MouseTail = () => {
  const prefersReducedMotion: boolean = usePrefersReducedMotion();
  const scrollAnim: string | undefined =
    prefersReducedMotion ? undefined : `${scroll} 3s 1.5s forwards`;
  const [selectedText, setSelectedText] = React.useState<string[]>(myText);
  // const timer = setTimeout(() => setSelectedText(myText), 3000);
  // React.useEffect(() => () => clearTimeout(timer),[timer]);
  const goldShadow: string = colorMode("none","drop-shadow(0 0 5px goldenrod)");
  const greenShadow: string = colorMode("none","drop-shadow(0 0 5px green)");

  return (
    <Stack
      align={"left"}
      animation={scrollAnim}
      fontFamily={"var(--chakra-fonts-mono)"}
      fontSize={"md"}
      maxHeight={0}
      overflow={"hidden"}
      spacing={0}>
      <Text fontSize={"105%"}>{selectedText[0]}</Text>
      <Text fontSize={"100%"} pl={"3rem"}>{selectedText[1]}</Text>
      <Text fontSize={"100%"} pl={"9rem"} filter={goldShadow} color={"goldenrod"}>{selectedText[2]}</Text>
      <Text fontSize={"100%"} pl={"10rem"} filter={goldShadow} color={"goldenrod"}>{selectedText[3]}</Text>
      <Text fontSize={"100%"} pl={"11rem"} filter={goldShadow} color={"goldenrod"}>{selectedText[4]}</Text>
      <Text fontSize={"100%"} pl={"10rem"} filter={goldShadow} color={"goldenrod"}>{selectedText[5]}</Text>
      <Text fontSize={"100%"} pl={"9rem"}>{selectedText[6]}</Text>
      <Text fontSize={"100%"} pl={"8rem"}>{selectedText[7]}</Text>
      <Text fontSize={"100%"} pl={"7rem"}>{selectedText[8]}</Text>
      <Text fontSize={"100%"} pl={"6rem"} filter={greenShadow} color={"green.500"}>{selectedText[9]}</Text>
      <Text fontSize={"90%"} pl={"6rem"} filter={greenShadow} color={"green.500"}>{selectedText[10]}</Text>
      <Text fontSize={"90%"} pl={"6.5rem"} filter={greenShadow} color={"green.500"}>{selectedText[11]}</Text>
      <Text fontSize={"90%"} pl={"8rem"} filter={greenShadow} color={"green.500"}>{selectedText[12]}</Text>
      <Text fontSize={"90%"} pl={"9rem"}>{selectedText[13]}</Text>
      <Text fontSize={"90%"} pl={"11rem"}>{selectedText[14]}</Text>
      <Text fontSize={"90%"} pl={"13rem"}>{selectedText[15]}</Text>
      <Text fontSize={"90%"} pl={"15rem"}>{selectedText[16]}</Text>
      <Text fontSize={"90%"} pl={"17rem"}>{selectedText[17]}</Text>
      <Text fontSize={"80%"} pl={"15rem"}>{selectedText[18]}</Text>
      <Text fontSize={"80%"} pl={"14.5rem"}>{selectedText[19]}</Text>
      <Text fontSize={"80%"} pl={"15rem"}>{selectedText[20]}</Text>
      <Text fontSize={"80%"} pl={"17rem"} filter={greenShadow} color={"green.500"}>{selectedText[21]}</Text>
      <Text fontSize={"80%"} pl={"15rem"} filter={greenShadow} color={"green.500"}>{selectedText[22]}</Text>
      <Text fontSize={"80%"} pl={"13.5rem"} filter={greenShadow} color={"green.500"}>{selectedText[23]}</Text>
      <Text fontSize={"70%"} pl={"11.5rem"}>{selectedText[24]}</Text>
      <Text fontSize={"70%"} pl={"11rem"}>{selectedText[25]}</Text>
      <Text fontSize={"70%"} pl={"10rem"}>{selectedText[26]}</Text>
      <Text fontSize={"70%"} pl={"10.5rem"}>{selectedText[27]}</Text>
      <Text fontSize={"70%"} pl={"12rem"} filter={goldShadow} color={"goldenrod"}>{selectedText[28]}</Text>
      <Text fontSize={"70%"} pl={"11rem"}>{selectedText[29]}</Text>
      <Text fontSize={"70%"} pl={"9.5rem"} filter={goldShadow} color={"goldenrod"}>{selectedText[30]}</Text>
      <Text fontSize={"70%"} pl={"8rem"} filter={goldShadow} color={"goldenrod"}>{selectedText[31]}</Text>
      <Text fontSize={"70%"} pl={"7rem"}>{selectedText[32]}</Text>
      <Text fontSize={"70%"} pl={"8rem"}>{selectedText[33]}</Text>
      <Text fontSize={"70%"} pl={"9rem"}>{selectedText[34]}</Text>
      <Text fontSize={"70%"} pl={"10rem"}>{selectedText[35]}</Text>
      <Text fontSize={"60%"} pl={"12rem"}>{selectedText[36]}</Text>
      <Text fontSize={"60%"} pl={"11.5rem"}>{selectedText[37]}</Text>
      <Text fontSize={"60%"} pl={"11rem"}>{selectedText[38]}</Text>
      <Text fontSize={"60%"} pl={"10rem"}>{selectedText[39]}</Text>
      <Text fontSize={"60%"} pl={"9rem"}>{selectedText[40]}</Text>
      <Text fontSize={"60%"} pl={"10rem"} filter={goldShadow} color={"goldenrod"}>{selectedText[41]}</Text>
      <Text fontSize={"60%"} pl={"11rem"} filter={goldShadow} color={"goldenrod"}>{selectedText[42]}</Text>
      <Text fontSize={"60%"} pl={"12rem"} filter={goldShadow} color={"goldenrod"}>{selectedText[43]}</Text>
      <Text fontSize={"60%"} pl={"13rem"} filter={goldShadow} color={"goldenrod"}>{selectedText[44]}</Text>
      <Text fontSize={"60%"} pl={"15rem"} filter={goldShadow} color={"goldenrod"}>{selectedText[45]}</Text>
      <Text fontSize={"60%"} pl={"15rem"}>{selectedText[46]}</Text>
      <Text fontSize={"60%"} pl={"14rem"}>{selectedText[47]}</Text>
      <Text fontSize={"60%"} pl={"15rem"}>{selectedText[48]}</Text>
      <Text fontSize={"60%"} pl={"16rem"}>{selectedText[49]}</Text>
      <Text fontSize={"60%"} pl={"16rem"}>{selectedText[50]}</Text>
    </Stack>
  );
};
