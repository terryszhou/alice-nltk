import { VStack } from "@chakra-ui/react";
import * as React from "react";

import { PageProps } from "../helpers/interfaces";
import { HomeHeading } from "./HomeHeading";
import { MouseTail } from "./MouseTail";

export const Home = ({ visRef, visible }: PageProps) => (
  <VStack
    spacing={10}
    marginTop={20}
    minHeight={"100vh"}
    ref={visRef}>
    <HomeHeading />
    <MouseTail />
  </VStack>
);
