import * as React from "react";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";

import "./App.css";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Home } from "./components/Home";
import { AboutNLTK } from "./components/AboutNLTK";
import { Materials } from "./components/Materials";
import { useOnScreen } from "./hooks/useOnScreen";

export const App = () => {
  const [visRef, visible]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef2, visible2]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef3, visible3]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Home visRef={visRef} visible={visible} />
      <AboutNLTK visRef={visRef2} visible={visible2} />
      <Materials visRef={visRef3} visible={visible3} />
    </ChakraProvider>
  );
};
