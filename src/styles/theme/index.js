import { createTheme } from "@mui/material";

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
      light: "#e5e5e5",
      dark: "#DDDFE5",
      contrastText: "#0C0C0C",
    },
    secondary: {
      main: "#242424",
      light: "#3c3c3c",
      dark: "#0C0C0C",
      contrastText: "#f2efee",
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
      br400: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
