import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Card, CardMedia, Stack } from "@mui/material";
import logo from "../assets/img/logo-lucio.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Lucio's Aberturas
      </Typography>
      <Divider />
      <List disablePadding>
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/">
            <Button color="secondary">Home</Button>
          </Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/empresa">
            <Button color="secondary">Empresa</Button>
          </Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/catalogue">
            <Button endIcon={<KeyboardArrowDownIcon />} color="secondary">
              Productos
            </Button>
          </Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/">
            <Button color="secondary">Contacto</Button>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="header" sx={{ display: "flex" }}>
      {/* position viene fixed pero me tapa parte del main, tener en cuenta */}
      <AppBar component="nav" position="sticky">
        {/* ------------------------------------------------ */}
        <Box backgroundColor="#0c0c0c">
          <Stack
            direction="row"
            spacing={5}
            justifyContent="center"
            alignItems="center"
            divider={
              <Divider
                orientation="vertical"
                flexItem
                color="#d1604"
                sx={{
                  my: "3px",
                }}
              />
            }
            // useFlexGap="true"
          >
            <Stack direction="row" alignItems="center">
              <WhatsAppIcon color="primary" sx={{ mr: "4px", py: "3px" }} />
              <Typography color="primary" variant="body2">
                +54 011 3815-8705
              </Typography>
            </Stack>
            <Typography color="primary" variant="body2">
              LA TABLADA, PARTIDO DE LA MATANZA
            </Typography>
          </Stack>
        </Box>
        <Toolbar
          sx={{
            justifyContent: { xs: "space-between", md: "space-around" },
            maxWidth: "2000px",
          }}
        >
          <Box sx={{ mr: 2, display: { md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Card
            sx={{
              maxWidth: { xs: "60px", md: "90px" },
              backgroundColor: "transparent",
              boxShadow: "none",
              margin: "10px",
            }}
          >
            <CardMedia component="img" image={logo} />
          </Card>
          <List sx={{ display: { xs: "none", md: "flex" } }}>
            <ListItem>
              <Link to="/">
                <Button color="secondary">Home</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/empresa">
                <Button color="secondary">Empresa</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/catalogue">
                <Button endIcon={<KeyboardArrowDownIcon />} color="secondary">
                  Productos
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <Button color="secondary">Contacto</Button>
              </Link>
            </ListItem>
          </List>
          <Button variant="contained" color="error">
            <WhatsAppIcon sx={{ mr: "4px" }} />
            {/* <Typography sx={{ display: { xs: "none", md: "block" } }}> */}
            Escribinos
            {/* </Typography> */}
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}

export default NavBar;
