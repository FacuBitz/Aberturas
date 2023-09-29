import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardMedia, List, ListItem, Typography } from "@mui/material";
import logoBlanco from "../assets/img/logo-lucio-blanco.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceIcon from "@mui/icons-material/Place";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
}));

export default function Footer() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      backgroundColor="#0C0C0C"
      position="absolute"
      bottom="0"
      width="100%"
    >
      <Grid container marginTop="0" maxWidth="2000px">
        <Grid item xs={12} sm={5} md={4.5}>
          <Item sx={{ justifyContent: { xs: "flex-start", sm: "center" } }}>
            <List>
              <ListItem>
                <Typography color="error.light">Contacto:</Typography>
              </ListItem>
              <ListItem>
                <WhatsAppIcon color="error" sx={{ mr: "4px", fontSize: 20 }} />
                <Typography variant="body2" color="primary">
                  +54 011 3815-8705
                </Typography>
              </ListItem>
              <ListItem>
                <MailOutlineIcon
                  color="error"
                  sx={{ mr: "4px", fontSize: 20 }}
                />
                <Typography variant="body2" color="primary">
                  Aberturaslucios@gmail.com
                </Typography>
              </ListItem>
            </List>
          </Item>
        </Grid>

        <Grid item xs={12} sm={2} md={3}>
          <Item sx={{ justifyContent: { xs: "flex-start", sm: "center" } }}>
            <Card
              sx={{
                maxWidth: { xs: "60px", md: "90px" },
                backgroundColor: "transparent",
                boxShadow: "none",
                margin: "10px",
              }}
            >
              <CardMedia component="img" image={logoBlanco} />
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
