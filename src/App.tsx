import * as React from "react";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";

import "./App.css";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Home } from "./components/Home";
import { useOnScreen } from "./hooks/useOnScreen";

export const App = () => {
  const [visRef, visible]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Home visRef={visRef} visible={visible} />
    </ChakraProvider>
  );
};
