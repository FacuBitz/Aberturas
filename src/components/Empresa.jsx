import { Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import fondo2 from "../assets/img/fondo-empresa.jpg";

const Empresa = () => {
  useEffect(() => {
    document.title = "Lucio's aberturas - Empresa";
  }, []);
  return (
    <Stack
      component="main"
      alignItems="center"
      sx={{ flexGrow: 1, pt: "50px" }}
      bgcolor="secondary.light"
      spacing={3}
    >
      <Typography
        component="h1"
        fontWeight="700"
        color="secondary.contrastText"
        fontSize="2rem"
        fontFamily="Open Sans"
      >
        LA EMPRESA
      </Typography>
      <Divider width="100px" color="#d16014" />
      <Container>
        <Typography
          fontWeight="500"
          color="secondary.contrastText"
          textAlign="center"
          fontSize="1.2rem"
          paddingBottom="20px"
        >
          Contamos con mas de 10 años de experiencia en el rubro. Nos dedicamos
          a la venta y fabricacion de aberturas para la construcción.
        </Typography>
        <Typography
          fontWeight="500"
          color="secondary.contrastText"
          textAlign="center"
          fontSize="1.2rem"
        >
          Comercializando productos de primeras marcas, que garantizan la
          confianza con el cliente y el bienestar de tu hogar.
        </Typography>
      </Container>
      <Typography
        component="h2"
        fontWeight="700"
        color="secondary.contrastText"
        variant="h5"
        marginTop="50px"
        fontFamily="Open Sans"
      >
        NUESTRA FÁBRICA
      </Typography>
      <Divider width="100px" color="#d16014" />
      <Container>
        <Typography
          fontWeight="500"
          color="secondary.contrastText"
          textAlign="center"
          fontSize="1.2rem"
          paddingBottom="20px"
        >
          Contamos con un galpon de mas de 300Mts cuadrados donde realizamos la
          produccion de carpinterías de aluminio en media y alta prestación
        </Typography>
        <Typography
          fontWeight="500"
          color="secondary.contrastText"
          textAlign="center"
          fontSize="1.2rem"
          marginBottom="50px"
        >
          Nos especializamos en vidrios DVH (doble vidriado hermético), el cual
          es muy utilizado en las viviendas para lograr una mayor aislación
          térmica y acústica.
        </Typography>
      </Container>
      <img src={fondo2} alt="imagen fabrica" className="img" />

      {/* un stack mas para las tres fotos de la fabrica grandes */}
    </Stack>
  );
};

export default Empresa;
