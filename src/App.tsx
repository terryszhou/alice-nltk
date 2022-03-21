import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import "./App.css";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Home } from "./components/Home";
import { AboutNLTK } from "./components/AboutNLTK";
import { ChunkingIntro } from "./components/ChunkingIntro";
import { ChunkingChapters } from "./components/ChunkingChapters";
import { Materials } from "./components/Materials";
import { SentenceStructure } from "./components/SentenceStructure";
import { VaderIntro } from "./components/VaderIntro";
import { VaderChapters } from "./components/VaderChapters";
import { useOnScreen } from "./hooks/useOnScreen";

export const App = () => {
  const [visRef, visible]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef2, visible2]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef3, visible3]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef4, visible4]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef5, visible5]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef6, visible6]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef7, visible7]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef8, visible8]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Home visRef={visRef} visible={visible} />
      <AboutNLTK visRef={visRef2} visible={visible2} />
      <Materials visRef={visRef3} visible={visible3} />
      <SentenceStructure visRef={visRef4} visible={visible4} />
      <VaderIntro visRef={visRef5} visible={visible5} />
      <VaderChapters visRef={visRef6} visible={visible6} />
      <ChunkingIntro visRef={visRef7} visible={visible7} />
      <ChunkingChapters visRef={visRef8} visible={visible8} />
    </ChakraProvider>
  );
};
