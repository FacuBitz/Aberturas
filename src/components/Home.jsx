import React from "react";
import { useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AspectRatio } from "@mui/icons-material";
import aluar from "../assets/img/logo-aluar.png";
import caia from "../assets/img/logo-caia.png";
import elitalo from "../assets/img/logo-elitalo.png";
import pavir from "../assets/img/logo-pavir.png";
import potenza from "../assets/img/logo-potenza.png";
import vasa from "../assets/img/logo-vasa.png";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import DoneIcon from "@mui/icons-material/Done";
import puerta from "../assets/img/puerta-lucio.png";
import ventana from "../assets/img/ventana-lucio.png";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  width: "15vw",
  maxWidth: "300px",
}));
const Brands = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
}));

export default function Home() {
  useEffect(() => {
    document.title = "Lucio's aberturas - Home";
  }, []);
  return (
    <Box
      sx={{ flexGrow: 1, pt: "50px" }}
      margin="auto"
      width="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="#E5E5E5"
    >
      <Stack component="section" alignItems="center">
        <Typography fontWeight="600" marginBottom="50px" variant="h6">
          TRABAJAMOS CON LOS MEJORES
        </Typography>
        <Grid
          container
          spacing={2}
          display="flex"
          alignItems="center"
          margin="0"
          marginBottom="90px"
        >
          <Brands xs={12} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "60px", sm: "70px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={aluar} />
              </Card>
            </Item>
          </Brands>
          <Brands xs={12} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "60px", sm: "160px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={caia} />
              </Card>
            </Item>
          </Brands>
          <Brands xs={12} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "60px", sm: "200px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={elitalo} />
              </Card>
            </Item>
          </Brands>
          <Brands xs={12} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "60px", sm: "160px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={pavir} />
              </Card>
            </Item>
          </Brands>
          <Brands xs={12} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "60px", sm: "150px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={potenza} />
              </Card>
            </Item>
          </Brands>
          <Brands xs={12} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "60px", sm: "80px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={vasa} />
              </Card>
            </Item>
          </Brands>
        </Grid>
      </Stack>
      <Grid
        container
        spacing={6}
        component="section"
        margin="0"
        marginBottom="30px"
        alignItems="center"
      >
        <Grid
          xs={12}
          sm={4}
          display="flex"
          justifyContent="center"
          textAlign="center"
        >
          <Card
            sx={{
              maxWidth: { xs: "60px", sm: "75px" },
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <CardMedia component="img" image={puerta} />

            <Typography variant="button">Puertas</Typography>
          </Card>
        </Grid>
        <Grid xs={12} sm={4} display="flex" justifyContent="center">
          <Typography
            variant="button"
            textAlign="center"
            lineHeight="18px"
            color="error"
          >
            Nuestros productos
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={4}
          display="flex"
          justifyContent="center"
          textAlign="center"
        >
          <Card
            sx={{
              maxWidth: { xs: "60px", sm: "90px" },
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <CardMedia component="img" image={ventana} />

            <Typography variant="button">Ventanas</Typography>
          </Card>
        </Grid>
      </Grid>
      <Stack component="section" alignItems="center" spacing={2}>
        <Typography variant="h6" color="error" letterSpacing="4px">
          NOSOTROS
        </Typography>
        <Divider width="100px" />
        <Typography maxWidth="1000px" textAlign="center" fontWeight="500">
          SOMOS UNA EMPRESA FAMILIAR CON MAS DE 10 AÑOS DE EXPERIENCIA EN EL
          RUBRO DE LAS ABERTURAS. BRINDANDO UNA GRAN ATENCION PERSONALIZADA Y
          SERVICIO POST-VENTA PARA RESOLVER TODO TIPO DE INQUIETUDES.
        </Typography>
        <Typography fontWeight="500">¡COTIZAMOS TODO TIPO DE OBRA!</Typography>
        <Button variant="contained" color="error">
          CONOCER MAS
        </Button>
        <Stack flexDirection="row" spacing={25} marginY="30px">
          <Typography variant="button" display="flex" alignItems="center">
            <DoneIcon />
            COMPROMISO
          </Typography>
          <Typography variant="button" display="flex" alignItems="center">
            <DoneIcon />
            CONFIANZA
          </Typography>
          <Typography variant="button" display="flex" alignItems="center">
            <DoneIcon />
            GARANTIA
          </Typography>
        </Stack>
      </Stack>
      <Stack component="section" alignItems="center" spacing="20px">
        <Typography fontWeight="600" variant="h6">
          NUESTROS SERVICIOS
        </Typography>
        <Divider width="100px" />
        <Grid
          container
          spacing={2}
          display="flex"
          alignItems="center"
          margin="0"
          component="section"
        >
          <Brands xs={12} sm={6} md={3}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "60px", sm: "70px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={aluar} />
              </Card>
            </Item>
          </Brands>
          <Brands xs={12} sm={6} md={3}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "60px", sm: "70px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={aluar} />
              </Card>
            </Item>
          </Brands>
          <Brands xs={12} sm={6} md={3}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "60px", sm: "70px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={aluar} />
              </Card>
            </Item>
          </Brands>
          <Brands xs={12} sm={6} md={3}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "60px", sm: "70px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={aluar} />
              </Card>
            </Item>
          </Brands>
        </Grid>
      </Stack>
    </Box>
  );
}
