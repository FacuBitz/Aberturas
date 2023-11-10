import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import logoBlanco from "../assets/img/logo-lucio-blanco.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceIcon from "@mui/icons-material/Place";
import InstagramIcon from "@mui/icons-material/Instagram";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
}));

export default function Footer() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      backgroundColor="secondary.dark"
      width="100%"
      component="footer"
      id="cto"
    >
      <Grid container marginTop="0" maxWidth="2000px" margin="auto">
        <Grid item xs={12} sm={5} md={4.5}>
          <Item sx={{ justifyContent: { xs: "flex-start", sm: "center" } }}>
            <List>
              <ListItem>
                <Typography color="error.light">Contacto:</Typography>
              </ListItem>
              <ListItem>
                <WhatsAppIcon color="error" sx={{ mr: "4px", fontSize: 20 }} />
                <Typography variant="body2" color="primary">
                  <Link
                    href="tel:+5491138158705"
                    variant="inherit"
                    underline="none"
                  >
                    +54 9 11 3815-8705
                  </Link>
                </Typography>
              </ListItem>
              <ListItem>
                <MailOutlineIcon
                  color="error"
                  sx={{ mr: "4px", fontSize: 20 }}
                />
                <Typography variant="body2" color="primary">
                  <Link
                    href="mailto:aberturaslucios@gmail.com"
                    variant="inherit"
                    underline="none"
                    target="_blank"
                  >
                    Aberturaslucios@gmail.com
                  </Link>
                </Typography>
              </ListItem>
              <ListItem>
                <InstagramIcon color="error" sx={{ mr: "4px", fontSize: 20 }} />
                <Typography variant="body2" color="primary">
                  <Link
                    href="https://instagram.com/aberturaslucios?igshid=YTQwZjQ0NmI0OA=="
                    variant="inherit"
                    underline="none"
                    target="_blank"
                  >
                    aberturaslucios
                  </Link>
                </Typography>
              </ListItem>
            </List>
          </Item>
        </Grid>

        <Grid
          item
          xs={12}
          sm={2}
          md={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Item sx={{ justifyContent: { xs: "flex-start", sm: "center" } }}>
            <Card
              sx={{
                maxWidth: { xs: "60px", md: "90px" },
                backgroundColor: "transparent",
                boxShadow: "none",
                margin: "10px",
              }}
            >
              <CardMedia component="img" image={logoBlanco} alt="logo" />
            </Card>
          </Item>
        </Grid>

        <Grid item xs={12} sm={5} md={4.5}>
          <Item sx={{ justifyContent: { xs: "flex-start", sm: "center" } }}>
            <List>
              <ListItem>
                <Typography color="error.light">Ubicacion:</Typography>
              </ListItem>
              <ListItem>
                <PlaceIcon color="error" sx={{ mr: "4px", fontSize: 20 }} />
                <Typography variant="body2" color="primary">
                  LA TABLADA, PARTIDO DE LA MATANZA
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" color="primary">
                  BUENOS AIRES, ARGENTINA
                </Typography>
              </ListItem>
            </List>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
