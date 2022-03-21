import { Image, Stack, Text, useColorModeValue as colorMode, useDisclosure } from "@chakra-ui/react";
import * as React from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";
import { figureDataThree } from "../data/figureData";
import { DataGraphModal } from "./DataGraphModal";

export const Conclusion = ({ visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <HeroShell
      loaded={loaded}
      title={"What Have We Learned?"}
      visRef={visRef}>
      <Stack
        align={"center"}
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={"md"}
        spacing={2}
        textAlign={"justify"}>
        <Text style={{ textIndent: 20 }}>
          Natural Language Processing is a powerful tool that can quickly parse large amounts of text and glean a variety of insights from it.
        </Text> 
        <Text style={{ textIndent: 20 }}>
          However, as with any program or algorithm, it takes a human being to sift through the end data and decide what's truly relevant, and what's a fluke of the process.
        </Text> 
        <Text style={{ textIndent: 20 }}>
          I hope you enjoyed going down the Data Rabbit Hole with me. Until next time!
        </Text>
      </Stack>
      <Stack
        align={"center"}
        width={"100%"}
        spacing={5}>
        <Image src={"/white-rabbit.png"} width={"50%"} />
      </Stack>
    </HeroShell>
  );
};

