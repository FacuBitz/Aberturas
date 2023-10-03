import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";

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
      spacing={2}
    >
      <Typography
        component="h1"
        variant="h5"
        fontWeight="600"
        color="secondary.contrastText"
      >
        LA EMPRESA
      </Typography>
      <Divider width="100px" color="#d16014" />
      <Typography
        fontWeight="500"
        color="secondary.contrastText"
        textAlign="center"
      >
        CONTAMOS CON MAS DE 10 AÑOS DE EXPERIENCIA EN EL RUBRO. NOS DEDICAMOS A
        LA VENTA Y FABRICACION DE ABERTURAS PARA LA CONSTRUCCION.
      </Typography>
      <Typography
        fontWeight="500"
        color="secondary.contrastText"
        textAlign="center"
      >
        COMERCIALIZANDO PRODUCTOS DE PRIMERAS MARCAS, QUE GARANTIZAN LA
        CONFIANZA CON EL CLIENTE Y EL BIENESTAR DE TU HOGAR.
      </Typography>
      <Typography
        component="h2"
        variant="h6"
        marginTop="50px"
        color="secondary.contrastText"
      >
        NUESTRA FABRICA
      </Typography>
      <Divider width="100px" color="#d16014" />
      <Typography
        fontWeight="500"
        color="secondary.contrastText"
        textAlign="center"
      >
        CONTAMOS CON UN GALPON DE MAS DE 300Mts 2. DONDE REALIZAMOS LA
        PRODUCCION DE CARPINTERIAS DE ALUMINIO EN MEDIA Y ALTA PRESTACIÓN.
      </Typography>
      <Typography
        fontWeight="500"
        marginBottom="50px"
        color="secondary.contrastText"
        textAlign="center"
      >
        NOS ESPECIALIZAMOS EN VIDRIOS DVH (DOBLE VIDRIADO HERMETICO), EL CUAL ES
        MUY UTILIZADO EN LAS VIVIENDAS PARA LOGRAR UNA MAYOY AISLACIÓN TÉRMICA Y
        ACÚSTICA.
      </Typography>
      {/* un stack mas para las tres fotos de la fabrica grandes */}
    </Stack>
  );
};

export default Empresa;
