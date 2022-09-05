import { createTheme } from "@mui/material";
import { MAIN_COLOR } from "lib/constants/constants";

export const theme = createTheme({
  palette: {
    primary: {
      main: MAIN_COLOR,
    },
  },
});
