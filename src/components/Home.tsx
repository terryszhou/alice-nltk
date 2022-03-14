import * as React from "react";
import { Box, Stack, VStack } from "@chakra-ui/react";

import { HeroShell } from "./HeroShell";
import { HomeHeading } from "./HomeHeading";
import { MouseTail } from "./MouseTail";
import { PageProps } from "../helpers/interfaces";

export const Home = ({ visRef, visible }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <HeroShell visRef={visRef} loaded={loaded}>
      <VStack spacing={10}>
        <HomeHeading />
        <MouseTail />
      </VStack>
      <Box />
    </HeroShell>
  );
};
