import * as React from "react";
import { Box, Image, Heading, Flex, Stack, HStack, VStack, Text, useColorModeValue as colormode } from "@chakra-ui/react";

import { HeroShell } from "./HeroShell";
import { HomeHeading } from "./HomeHeading";
import { PageProps } from "../helpers/interfaces";

export const Home = ({ visRef, visible }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <HeroShell visRef={visRef} loaded={loaded}>
      <HomeHeading />
      <Box />
    </HeroShell>
  );
};