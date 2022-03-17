import { VStack } from "@chakra-ui/react";
import * as React from "react";

import { PageProps } from "../helpers/interfaces";
import { HomeHeading } from "./HomeHeading";
import { MouseTail } from "./MouseTail";

export const Home = ({ visRef, visible }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    visible && setLoaded(true);
  }, [visible]);

  return (
    <VStack
      spacing={10}
      marginTop={5}
      minHeight={"100vh"}
      ref={visRef}>
      <HomeHeading />
      <MouseTail />
    </VStack>
  );
};
