import { Box, Image, Button, Stack, Text, useToast, useColorModeValue as colorMode, useDisclosure } from "@chakra-ui/react";
import * as React from "react";
import { CustomTooltip } from "./DataGraph";

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

export const ChunkingChapters = ({ visible, visRef }: PageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <HeroShell
      loaded={loaded}
      title={"Chunking by Chapter"}
      visRef={visRef}>
      <Stack
        align={"center"}
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={"md"}
        spacing={2}
        textAlign={"justify"}>
        <Text style={{ textIndent: 20 }}>
          We can use the chunking from the previous section to discover how often characters appear in each chapter. 
        </Text> 
        <Text style={{ textIndent: 20 }}>
          Due to the episodic nature of Alice in Wonderland, you'll notice that most characters' occurrence data show up as only a few blocks of color.
        </Text> 
        <Text style={{ textIndent: 20 }}>
          These correspond to the one or two chapters they appear in. Alice, obviously, appears fairly evenly in every chapter.
        </Text>
      </Stack>
      <Stack
        align={"center"}
        width={"100%"}
        spacing={5}>
        <ResponsiveContainer height={300} width={"100%"}>
          <BarChart
            onClick={onOpen}
            style={{ cursor: "pointer", fontSize: 12 }}
            data={figureDataThree[0].data}
            layout={"vertical"}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5 }}>
            <text
              dominantBaseline="central"
              fill={colorMode("black", "white")}
              textAnchor="middle"
              x={"55%"}
              y={4.5}>
              <tspan fontFamily={"Nunito"} fontSize="12">{figureDataThree[0].title}</tspan>
            </text>
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="I" stackId="a" fill="#ae2e74" />
            <Bar dataKey="II" stackId="a" fill="#d84969" />
            <Bar dataKey="III" stackId="a" fill="#f5705c" />
            <Bar dataKey="IV" stackId="a" fill="#ff9c53" />
            <Bar dataKey="V" stackId="a" fill="#ffca57" />
            <Bar dataKey="VI" stackId="a" fill="#f9f871" />
            <Bar dataKey="VII" stackId="a" fill="#00c9b7" />
            <Bar dataKey="VIII" stackId="a" fill="#00a093" />
            <Bar dataKey="IX" stackId="a" fill="#0096b5" />
            <Bar dataKey="X" stackId="a" fill="#0087ca" />
            <Bar dataKey="XI" stackId="a" fill="#4370c8" />
            <Bar dataKey="XII" stackId="a" fill="#8d52a9" />
          </BarChart>
        </ResponsiveContainer>
        <DataGraphModal
          code={figureDataThree[0].code}
          fig={figureDataThree[0].fig}
          isOpen={isOpen}
          onClose={onClose}
          title={figureDataThree[0].title} />
      </Stack>
    </HeroShell>
  );
};
