import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";

const Empresa = () => {
  useEffect(() => {
    document.title = "Lucio's aberturas - Empresa";
  }, []);
  return (
    <Stack
      component="section"
      alignItems="center"
      sx={{ flexGrow: 1, pt: "50px" }}
      bgcolor="#E5E5E5"
      spacing={2}
    >
      <Typography component="h1" variant="h5" fontWeight="600">
        LA EMPRESA
      </Typography>
      <Divider width="100px" color="#d1604" />
      <Typography fontWeight="500">
        CONTAMOS CON MAS DE 10 AÑOS DE EXPERIENCIA EN EL RUBRO. NOS DEDICAMOS A
        LA VENTA Y FABRICACION DE ABERTURAS PARA LA CONSTRUCCION.
      </Typography>
      <Typography fontWeight="500">
        COMERCIALIZANDO PRODUCTOS DE PRIMERAS MARCAS, QUE GARANTIZAN LA
        CONFIANZA CON EL CLIENTE Y EL BIENESTAR DE TU HOGAR.
      </Typography>
      <Typography component="h2" variant="h6" marginTop="50px">
        NUESTRA FABRICA
      </Typography>
      <Divider width="100px" color="#d1604" />
      <Typography fontWeight="500">
        CONTAMOS CON UN GALPON DE MAS DE 300Mts 2. DONDE REALIZAMOS LA
        PRODUCCION DE CARPINTERIAS DE ALUMINIO EN MEDIA Y ALTA PRESTACIÓN.
      </Typography>
      <Typography fontWeight="500" marginBottom="50px">
        NOS ESPECIALIZAMOS EN VIDRIOS DVH (DOBLE VIDRIADO HERMETICO), EL CUAL ES
        MUY UTILIZADO EN LAS VIVIENDAS PARA LOGRAR UNA MAYOY AISLACIÓN TÉRMICA Y
        ACÚSTICA.
      </Typography>
      {/* un stack mas para las tres fotos de la fabrica grandes */}
    </Stack>
  );
};

export default Empresa;
