import { createTheme } from "@mui/material";

// export const Colors = {
//   primary: "rgb(246, 248, 255)",
//   // light_primary: "rgb(236, 124, 50)",
//   secondary: "rgb(12, 12, 12)",
//   warning: "rgb(209, 96, 20)",
// };

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
      main: "#F6F8FF",
      // light: '#42a5f5',
      dark: "#DDDFE5",
      contrastText: "#0C0C0C",
    },
    secondary: {
      main: "#0C0C0C",
      light: "#3c3c3c",
      dark: "#000000",
      contrastText: "#F6F8FF",
    },
    error: {
      main: "#D16014",
      light: "#de8f5a",
      dark: "#92430e",
      // contrastText: '#fff',
    },
  },
  // ----------------------------------------
  breakpoints: {
    values: {
      xs: 0,
      s400: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
