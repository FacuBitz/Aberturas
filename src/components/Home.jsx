import React from "react";
import { useEffect } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home = () => {
  useEffect(() => {
    document.title = "Lucio's aberturas - Home";
  }, []);
  return (
    <Box margin="auto" width="fit-content" sx={{ pt: "40px" }}>
      <Typography fontWeight="500">TRABAJAMOS CON LOS MEJORES</Typography>
      {/* Agregar un stack o img list para los logos de las marcas */}
    </Box>
  );
};

export default Home;
