import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
      },
    },
  },
  // -----------------------------------------
  palette: {
    mode: "light",
    primary: {
      main: "#F6F8FF",
      light: "#e5e5e5",
      dark: "#DDDFE5",
      contrastText: "#0C0C0C",
    },
    secondary: {
      main: "#242424",
      light: "#2a2a2a",
      dark: "#0C0C0C",
      contrastText: "#f2efee",
    },
    error: {
      main: "#D16014",
      light: "#de8f5a",
      dark: "#92430e",
    },
  },
  // ----------------------------------------
  breakpoints: {
    values: {
      xs: 0,
      br400: 400,
      sm: 600,
      br750: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
