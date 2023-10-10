import React from "react";
import { useEffect } from "react";
import {
  Button,
  Card,
  CardActionArea,
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
import arquitectos from "../assets/img/arquitectos.jpg";
import envios from "../assets/img/envios-a-todo-el-pais.jpg";
import fabricacion from "../assets/img/fabricacion.jpg";
import pagos from "../assets/img/medios-de-pago.jpg";
import { Link } from "react-router-dom";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  width: "15vw",
  [theme.breakpoints.down("md")]: {
    width: "20vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "30vw",
  },
  // maxWidth: "300px",
}));
const Brands = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
}));
const Services = styled(Card)(({ theme }) => ({
  // [theme.breakpoints.down("md")]: {
  //   width: "45vw",
  // }
  backgroundColor: "transparent",
  boxShadow: "none",
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
      bgcolor="primary.dark"
      component="main"
    >
      <Stack component="section" alignItems="center" maxWidth="xl">
        <Typography
          fontWeight="600"
          marginBottom="50px"
          variant="h6"
          component="h1"
        >
          TRABAJAMOS CON LOS MEJORES
        </Typography>
        <Grid
          container
          spacing={2}
          display="flex"
          alignItems="center"
          margin="0"
          marginBottom="60px"
        >
          <Brands xs={12} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "75px", sm: "70px" },
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
                  maxWidth: { xs: "120px", sm: "160px" },
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
                  maxWidth: { xs: "120px", sm: "200px" },
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
                  maxWidth: { xs: "120px", sm: "160px" },
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
                  maxWidth: { xs: "120px", sm: "150px" },
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
                  maxWidth: { xs: "90px", sm: "80px" },
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
      <Stack
        backgroundColor="secondary.light"
        marginBottom="30px"
        width="100%"
        alignItems="center"
        component="section"
        paddingY="15px"
      >
        <Grid
          container
          spacing={6}
          margin="0"
          alignItems="center"
          sx={{ width: { xs: "70%", sm: "60%", lg: "30%" } }}
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
                maxWidth: { xs: "80px", sm: "75px" },
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <CardMedia component="img" image={puerta} />

              <Typography variant="button" color="secondary.contrastText">
                Puertas
              </Typography>
            </Card>
          </Grid>
          <Grid xs={12} sm={4} display="flex" justifyContent="center">
            <Link to="/catalogue">
              <Button color="error">Nuestros productos</Button>
            </Link>
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
                maxWidth: { xs: "80px", sm: "90px" },
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <CardMedia component="img" image={ventana} />

              <Typography variant="button" color="secondary.contrastText">
                Ventanas
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Stack>
      <Stack component="section" alignItems="center" spacing={2} maxWidth="xl">
        <Typography
          variant="h6"
          component="h2"
          color="error"
          letterSpacing="4px"
          fontWeight="600"
        >
          NOSOTROS
        </Typography>
        <Divider width="100px" />
        <Typography
          maxWidth="1000px"
          textAlign="center"
          fontWeight="500"
          sx={{ width: { xs: "85%", lg: "95%" } }}
        >
          SOMOS UNA EMPRESA FAMILIAR CON MAS DE 10 AÑOS DE EXPERIENCIA EN EL
          RUBRO DE LAS ABERTURAS. BRINDANDO UNA GRAN ATENCION PERSONALIZADA Y
          SERVICIO POST-VENTA PARA RESOLVER TODO TIPO DE INQUIETUDES.
        </Typography>
        <Typography fontWeight="500" component="h3">
          ¡COTIZAMOS TODO TIPO DE OBRA!
        </Typography>
        <Link to="/empresa">
          <Button variant="contained" color="error">
            CONOCER MAS
          </Button>
        </Link>
        <Stack
          flexDirection="row"
          marginY="30px"
          marginX="10px"
          sx={{ gap: { xs: "50px", md: "200px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Typography
            variant="button"
            display="flex"
            alignItems="center"
            width="126px"
          >
            <DoneIcon color="error" sx={{ mx: "2px" }} />
            COMPROMISO
          </Typography>
          <Typography
            variant="button"
            display="flex"
            alignItems="center"
            width="126px"
          >
            <DoneIcon color="error" sx={{ mx: "2px" }} />
            CONFIANZA
          </Typography>
          <Typography
            variant="button"
            display="flex"
            alignItems="center"
            width="126px"
          >
            <DoneIcon color="error" sx={{ mx: "2px" }} />
            GARANTIA
          </Typography>
        </Stack>
      </Stack>
      <Stack
        component="section"
        backgroundColor="secondary.light"
        width="100%"
        alignItems="center"
        paddingY="30px"
      >
        <Stack alignItems="center" spacing="10px" maxWidth="xl">
          <Typography
            fontWeight="600"
            variant="h6"
            component="h2"
            color="secondary.contrastText"
            letterSpacing="1px"
          >
            NUESTROS SERVICIOS
          </Typography>
          <Divider width="100px" color="#D16014" />
          <Grid
            container
            spacing={4}
            display="flex"
            alignItems="center"
            marginX="20px"
            marginY="0"
            paddingTop="20px"
          >
            <Brands xs={12} sm={6} md={3}>
              <Services className="services__overlay">
                <CardMedia
                  component="img"
                  image={arquitectos}
                  className="image__overlay"
                />
                <Box className="overlay">
                  <Typography className="text__overlay" variant="button">
                    Arquitectos
                  </Typography>
                </Box>
              </Services>
            </Brands>
            <Brands xs={12} sm={6} md={3}>
              <Services className="services__overlay">
                <CardMedia
                  component="img"
                  image={envios}
                  className="image__overlay"
                />
                <Box className="overlay">
                  <Typography className="text__overlay" variant="button">
                    Envios a todo el pais
                  </Typography>
                </Box>
              </Services>
            </Brands>
            <Brands xs={12} sm={6} md={3}>
              <Services className="services__overlay">
                <CardMedia
                  component="img"
                  image={fabricacion}
                  className="image__overlay"
                />
                <Box className="overlay">
                  <Typography className="text__overlay" variant="button">
                    Fabricacion propia
                  </Typography>
                </Box>
              </Services>
            </Brands>
            <Brands xs={12} sm={6} md={3}>
              <Services className="services__overlay">
                <CardMedia
                  component="img"
                  image={pagos}
                  className="image__overlay"
                />
                <Box className="overlay">
                  <Typography className="text__overlay" variant="button">
                    Todos los medios de pago
                  </Typography>
                </Box>
              </Services>
            </Brands>
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
}
