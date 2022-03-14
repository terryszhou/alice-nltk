import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import * as React from "react"

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { useOnScreen } from "./hooks/useOnScreen";

export const App = () => {
  const [visRef, visible]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
    </ChakraProvider>
  );
};
