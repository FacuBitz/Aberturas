import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material";
import theme from "../styles/theme";

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Root;
