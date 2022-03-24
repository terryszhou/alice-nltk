import { Stack, Text } from "@chakra-ui/react";
import * as React from "react";

import { myText } from "../data/mouseTail";
import { scroll } from "../helpers/animations";
import { useAnim } from "../hooks/useAnim";

export const MouseTail = () => {
  const scrollAnim: string | undefined = useAnim(`${scroll} 3s 1.5s forwards`);
  const selectedText: string[] = myText;

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
      <Text fontSize={"100%"} pl={"9rem"} color={"brand.300"}>{selectedText[2]}</Text>
      <Text fontSize={"100%"} pl={"10rem"} color={"brand.300"}>{selectedText[3]}</Text>
      <Text fontSize={"100%"} pl={"11rem"} color={"brand.300"}>{selectedText[4]}</Text>
      <Text fontSize={"100%"} pl={"10rem"} color={"brand.300"}>{selectedText[5]}</Text>
      <Text fontSize={"100%"} pl={"9rem"}>{selectedText[6]}</Text>
      <Text fontSize={"100%"} pl={"8rem"}>{selectedText[7]}</Text>
      <Text fontSize={"100%"} pl={"7rem"}>{selectedText[8]}</Text>
      <Text fontSize={"100%"} pl={"6rem"} color={"brand.200"}>{selectedText[9]}</Text>
      <Text fontSize={"90%"} pl={"6rem"} color={"brand.200"}>{selectedText[10]}</Text>
      <Text fontSize={"90%"} pl={"6.5rem"} color={"brand.200"}>{selectedText[11]}</Text>
      <Text fontSize={"90%"} pl={"8rem"} color={"brand.200"}>{selectedText[12]}</Text>
      <Text fontSize={"90%"} pl={"9rem"}>{selectedText[13]}</Text>
      <Text fontSize={"90%"} pl={"11rem"}>{selectedText[14]}</Text>
      <Text fontSize={"90%"} pl={"13rem"}>{selectedText[15]}</Text>
      <Text fontSize={"90%"} pl={"15rem"}>{selectedText[16]}</Text>
      <Text fontSize={"90%"} pl={"17rem"}>{selectedText[17]}</Text>
      <Text fontSize={"80%"} pl={"15rem"}>{selectedText[18]}</Text>
      <Text fontSize={"80%"} pl={"14.5rem"}>{selectedText[19]}</Text>
      <Text fontSize={"80%"} pl={"15rem"}>{selectedText[20]}</Text>
      <Text fontSize={"80%"} pl={"17rem"} color={"brand.300"}>{selectedText[21]}</Text>
      <Text fontSize={"80%"} pl={"15rem"} color={"brand.300"}>{selectedText[22]}</Text>
      <Text fontSize={"80%"} pl={"13.5rem"} color={"brand.300"}>{selectedText[23]}</Text>
      <Text fontSize={"70%"} pl={"11.5rem"}>{selectedText[24]}</Text>
      <Text fontSize={"70%"} pl={"11rem"}>{selectedText[25]}</Text>
      <Text fontSize={"70%"} pl={"10rem"}>{selectedText[26]}</Text>
      <Text fontSize={"70%"} pl={"10.5rem"}>{selectedText[27]}</Text>
      <Text fontSize={"70%"} pl={"12rem"} color={"brand.200"}>{selectedText[28]}</Text>
      <Text fontSize={"70%"} pl={"11rem"}>{selectedText[29]}</Text>
      <Text fontSize={"70%"} pl={"9.5rem"} color={"brand.200"}>{selectedText[30]}</Text>
      <Text fontSize={"70%"} pl={"8rem"} color={"brand.200"}>{selectedText[31]}</Text>
      <Text fontSize={"70%"} pl={"7rem"}>{selectedText[32]}</Text>
      <Text fontSize={"70%"} pl={"8rem"}>{selectedText[33]}</Text>
      <Text fontSize={"70%"} pl={"9rem"}>{selectedText[34]}</Text>
      <Text fontSize={"70%"} pl={"10rem"}>{selectedText[35]}</Text>
      <Text fontSize={"60%"} pl={"12rem"}>{selectedText[36]}</Text>
      <Text fontSize={"60%"} pl={"11.5rem"}>{selectedText[37]}</Text>
      <Text fontSize={"60%"} pl={"11rem"}>{selectedText[38]}</Text>
      <Text fontSize={"60%"} pl={"10rem"}>{selectedText[39]}</Text>
      <Text fontSize={"60%"} pl={"9rem"}>{selectedText[40]}</Text>
      <Text fontSize={"60%"} pl={"10rem"} color={"brand.300"}>{selectedText[41]}</Text>
      <Text fontSize={"60%"} pl={"11rem"} color={"brand.300"}>{selectedText[42]}</Text>
      <Text fontSize={"60%"} pl={"12rem"} color={"brand.300"}>{selectedText[43]}</Text>
      <Text fontSize={"60%"} pl={"13rem"} color={"brand.300"}>{selectedText[44]}</Text>
      <Text fontSize={"60%"} pl={"15rem"} color={"brand.300"}>{selectedText[45]}</Text>
      <Text fontSize={"60%"} pl={"15rem"}>{selectedText[46]}</Text>
      <Text fontSize={"60%"} pl={"14rem"}>{selectedText[47]}</Text>
      <Text fontSize={"60%"} pl={"15rem"}>{selectedText[48]}</Text>
      <Text fontSize={"60%"} pl={"16rem"}>{selectedText[49]}</Text>
      <Text fontSize={"60%"} pl={"16rem"}>{selectedText[50]}</Text>
    </Stack>
  );
};
