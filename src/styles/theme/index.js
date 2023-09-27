import { createTheme } from "@mui/material";

export const Colors = {
  primary: "rgb(246, 248, 255)",
  // light_primary: "rgb(236, 124, 50)",
  secondary: "rgb(12, 12, 12)",
  warning: "rgb(209, 96, 20)",
};

const theme = createTheme({
  // si genera error en algun stack sacar esto
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
  // -----------------------------------------
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    warning: {
      main: Colors.warning,
    },
  },
});

export default theme;
