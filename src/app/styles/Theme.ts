import { extendTheme } from "@chakra-ui/react";
import { colors } from "./theme/colors";
import { globalStyles } from "./theme/globalStyles";

const theme = extendTheme({
  colors,
  styles: globalStyles,
});

export default theme;
