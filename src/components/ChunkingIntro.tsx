import { Box } from "@chakra-ui/react";
import * as React from "react";
import { HeroShell } from "./HeroShell";
import { PageProps } from "../helpers/interfaces";

export const ChunkingIntro = ({ visRef, visible }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <HeroShell
      loaded={loaded}
      title={"Chunking: What's in a Name?"}
      visRef={visRef}>
      <Box></Box>
      <Box></Box>
    </HeroShell>
  );
};
