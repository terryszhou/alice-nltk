import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Styles } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles: Styles = {
  global: props => ({
    body: {
      bg: "#fff6fb",
    },
  }),
};

export const theme = extendTheme({
  fonts: {
    mono: "'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace",
    nunito: "'Nunito', sans-serif",
    roboto: "'Roboto', sans-serif",
    super: "'Supermercado One', cursive",
    petch: "'Chakra Petch', sans-serif",
    inspiration: "'Inspiration', cursive",
  },
  config,
  styles,
  colors: {
    brand: {
      100: "#fff6fb",
      200: "#b78199",
      300: "#90719c",
      400: "#ae2e74",
    }
  },
});
