import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Empresa from "./components/Empresa";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import React from "react";
import "./App.css";
import { Button, Container, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <NavBar />
          <Container maxWidth="xl" component="main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/empresa" element={<Empresa />} />
              <Route exact path="/catalogue" element={<ItemListContainer />} />
              <Route
                exact
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
            <Footer />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
