import React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import aluar from "../assets/img/logo-aluar.png";
import caia from "../assets/img/logo-caia.png";
import elitalo from "../assets/img/logo-elitalo.png";
import pavir from "../assets/img/logo-pavir.png";
import potenza from "../assets/img/logo-potenza.png";
import vasa from "../assets/img/logo-vasa.png";
import Grid from "@mui/material/Unstable_Grid2";
import DoneIcon from "@mui/icons-material/Done";
import puerta from "../assets/img/puerta-lucio.png";
import ventana from "../assets/img/ventana-lucio.png";
import arquitectos from "../assets/img/arquitectos.jpg";
import envios from "../assets/img/envios-a-todo-el-pais.jpg";
import fabricacion from "../assets/img/fabricacion.jpg";
import pagos from "../assets/img/medios-de-pago.jpg";
import { Link } from "react-router-dom";
import fondo from "../assets/img/fondo.jpg";
import fondoMobile from "../assets/img/fondo-mobile.jpg";

// Custom Box for brands display
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
}));

// Custom Grid for brands display
const Brands = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
}));

// Custom Card for services img
const Services = styled(Card)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
}));

export default function Home() {
  useEffect(() => {
    document.title = "Lucio's aberturas - Home";
  }, []);
  return (
    <Box
      sx={{ flexGrow: 1 }}
      margin="auto"
      width="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="primary.dark"
      component="main"
    >
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <img src={fondo} alt="imagen fabrica" className="img" />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <img src={fondoMobile} alt="imagen fabrica" className="img" />
      </Box>
      <Stack component="section" alignItems="center" maxWidth="xl">
        <Typography
          fontFamily="Open Sans"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem", lg: "2rem" },
            paddingTop: { xs: "50px", md: "90px" },
            marginBottom: { xs: "42px", md: "60px" },
          }}
          fontWeight="700"
          component="h1"
          color="secondary.light"
          align="center"
        >
          ¡TRABAJAMOS CON LOS MEJORES!
        </Typography>
        <Grid
          container
          spacing={2}
          display="flex"
          alignItems="center"
          margin="0"
          marginBottom="60px"
        >
          <Brands xs={6} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "72px", sm: "68px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={aluar} alt="logo aluar" />
              </Card>
            </Item>
          </Brands>
          <Brands xs={6} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "120px", sm: "158px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={caia} alt="logo caia" />
              </Card>
            </Item>
          </Brands>
          <Brands xs={6} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "120px", sm: "200px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={elitalo} alt="logo elitalo" />
              </Card>
            </Item>
          </Brands>
          <Brands xs={6} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "120px", sm: "160px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={pavir} alt="logo pavir" />
              </Card>
            </Item>
          </Brands>
          <Brands xs={6} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "120px", sm: "148px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={potenza} alt="logo potenza" />
              </Card>
            </Item>
          </Brands>
          <Brands xs={6} sm={4} md={2}>
            <Item>
              <Card
                sx={{
                  maxWidth: { xs: "80px", sm: "78px" },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={vasa} alt="logo vasa" />
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
              <CardMedia
                component="img"
                image={puerta}
                alt="ilustracion puerta"
              />

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
              <CardMedia
                component="img"
                image={ventana}
                alt="ilustracion ventana"
              />

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
                  alt="servicio de arquitectos"
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
                  alt="servicio de envios"
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
                  alt="servicio de fabricacion"
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
                  alt="servicio pagos"
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
