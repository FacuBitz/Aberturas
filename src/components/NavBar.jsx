import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Card, CardMedia, Menu, MenuItem, Stack } from "@mui/material";
import logo from "../assets/img/logo-lucio.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;

// Custom Link for dropwdown menu
const CustomLink = styled(Link)(() => ({
  component: "a",
  // -------------------- no funcionan aca :(  tratar de que funcione ----------------------
  // className: "dropdown-content-link",
  // onClick: { handleClose },
}));

// Custom Accordion for responsive app bar
// ---------------- No funciona, estaria bueno porq ahorra mucho codigo, tratar de que funcione -------------------
// const CustomAccordion = styled(Accordion)(() => ({
//   disableGutters: true,
//   boxShadow: 0,
// }));

// ----------- Funcion para que baje el navbar al hacer scroll -----------------
// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });
//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

function NavBar(props) {
  // drawer toggle
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    //---------------- lo de abajo cierra el drawer al filtrar pero hace que se trabe un poco, que hago? ---------------
    // expanded ? panel : false;
  };

  // Accordion for responsive
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // drawer para productos en mobile
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Lucio's Aberturas
      </Typography>
      <Divider />
      <List disablePadding>
        <ListItem
          sx={{ justifyContent: "center" }}
          onClick={handleDrawerToggle}
        >
          <Link to="/">
            <Button color="secondary">Home</Button>
          </Link>
        </ListItem>
        <ListItem
          sx={{ justifyContent: "center" }}
          onClick={handleDrawerToggle}
        >
          <Link to="/empresa">
            <Button color="secondary">Empresa</Button>
          </Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            disableGutters
            sx={{ boxShadow: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="button">Productos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Accordion
                disableGutters
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={{ boxShadow: 0 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Puertas
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button>
                    <CustomLink
                      to={`/category/${"interior"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Interior
                    </CustomLink>
                  </Button>
                  <Button>
                    <CustomLink
                      to={`/category/${"exterior"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Exterior
                    </CustomLink>
                  </Button>
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                sx={{ boxShadow: 0 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Portones
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button>
                    <CustomLink
                      to={`/category/${"aluminio"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Aluminio
                    </CustomLink>
                  </Button>
                  <Button>
                    <CustomLink
                      to={`/category/${"chapa"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Chapa
                    </CustomLink>
                  </Button>
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                sx={{ boxShadow: 0 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Aluminio
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button>
                    <CustomLink
                      to={`/category/${"modena"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Linea Modena
                    </CustomLink>
                  </Button>
                  <Button>
                    <CustomLink
                      to={`/category/${"a30"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      A30 New
                    </CustomLink>
                  </Button>
                  <Button>
                    <CustomLink
                      to={`/category/${"herrero"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Herrero
                    </CustomLink>
                  </Button>
                  <Button>
                    <CustomLink
                      to={`/category/${"hetonda"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Hetonda
                    </CustomLink>
                  </Button>
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                sx={{ boxShadow: 0 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Vidrios
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button>
                    <CustomLink
                      to={`/category/${"float"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Float
                    </CustomLink>
                  </Button>
                  <Button>
                    <CustomLink
                      to={`/category/${"dvh"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      DVH
                    </CustomLink>
                  </Button>
                  <Button>
                    <CustomLink
                      to={`/category/${"laminados"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Laminados
                    </CustomLink>
                  </Button>
                </AccordionDetails>
              </Accordion>
              <Divider sx={{ marginBottom: "10px" }} />
              <CustomLink
                to={`/category/${"placard"}`}
                className="dropdown-content-link"
                onClick={handleDrawerToggle}
              >
                Frentes de placard
              </CustomLink>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <ListItem
          sx={{ justifyContent: "center" }}
          onClick={handleDrawerToggle}
        >
          <Link to="/">
            <Button color="secondary">Contacto</Button>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // handle menu dropdown de "productos" en desktop
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        //  height: { xs: "108px", md: "135px" }
        // para activar scroll sacar comentarios al height, function HideOnScroll y etiqueta HideOnScroll
        // tambien sacar  position="sticky" del AppBar
        // ------------------- dejo comentado porq enrealidad esta mal darle un height al navbar, mala practica -----------------
      }}
    >
      {/* position viene fixed pero me tapa parte del main, tener en cuenta, puedo sobreescribirle un height pero esta mal */}
      {/* <HideOnScroll {...props}> */}
      <AppBar component="nav" position="sticky">
        <Box backgroundColor="secondary.dark">
          <Stack
            direction="row"
            spacing={5}
            justifyContent="center"
            alignItems="center"
            sx={{ justifyContent: { xs: "space-around", sm: "center" } }}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                color="#d16014"
                sx={{
                  my: "4px",
                  display: { xs: "none", sm: "block" },
                }}
              />
            }
          >
            <Stack direction="row" alignItems="center">
              <Stack
                sx={{ width: { xs: "auto", sm: "260px" } }}
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-end"
              >
                <WhatsAppIcon
                  color="primary"
                  sx={{
                    m: "4px",
                    py: "2px",
                    fontSize: { xs: "20px", lg: "25px" },
                    display: { xs: "none", br400: "block" },
                  }}
                />
                <Typography
                  color="primary"
                  variant="body2"
                  sx={{ fontSize: { xs: "12px", lg: "14px" } }}
                >
                  +54 011 3815-8705
                </Typography>
              </Stack>
            </Stack>
            <Box sx={{ width: { xs: "auto", sm: "260px" } }}>
              <Typography
                color="primary"
                variant="body2"
                sx={{ fontSize: { xs: "12px", lg: "14px" } }}
              >
                LA TABLADA, PARTIDO DE LA MATANZA
              </Typography>
            </Box>
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
              // maxWidth: { xs: "60px", md: "90px" },
              backgroundColor: "transparent",
              boxShadow: "none",
              margin: "10px",
              width: { md: "140px" },
            }}
          >
            <CardMedia
              component="img"
              image={logo}
              sx={{ maxWidth: { xs: "60px", md: "90px" } }}
            />
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
              <Button
                endIcon={<KeyboardArrowDownIcon />}
                color="secondary"
                id="prods-button"
                aria-controls={open ? "prods-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Productos
              </Button>
              <Menu
                id="prods-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "prods-button",
                }}
              >
                <MenuItem className="dropdown">
                  <Typography>Puertas</Typography>
                  <div className="dropdown-content">
                    <CustomLink
                      to={`/category/${"interior"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Interior
                    </CustomLink>
                    <CustomLink
                      to={`/category/${"exterior"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Exterior
                    </CustomLink>
                  </div>
                </MenuItem>
                <MenuItem className="dropdown">
                  <Typography>Portones</Typography>
                  <div className="dropdown-content">
                    <CustomLink
                      to={`/category/${"aluminio"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Aluminio
                    </CustomLink>
                    <CustomLink
                      to={`/category/${"chapa"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Chapa
                    </CustomLink>
                  </div>
                </MenuItem>
                <MenuItem className="dropdown">
                  <Typography>Aluminio</Typography>
                  <div className="dropdown-content">
                    <CustomLink
                      to={`/category/${"modena"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Linea Modena
                    </CustomLink>
                    <CustomLink
                      to={`/category/${"a30"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      A30 New
                    </CustomLink>
                    <CustomLink
                      to={`/category/${"herrero"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Herrero
                    </CustomLink>
                    <CustomLink
                      to={`/category/${"hetonda"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Hetonda
                    </CustomLink>
                  </div>
                </MenuItem>
                <MenuItem className="dropdown">
                  <Typography>Vidrios</Typography>
                  <div className="dropdown-content">
                    <CustomLink
                      to={`/category/${"float"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Float
                    </CustomLink>
                    <CustomLink
                      to={`/category/${"dvh"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      DVH
                    </CustomLink>
                    <CustomLink
                      to={`/category/${"laminados"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Laminados
                    </CustomLink>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to={`/category/${"placard"}`}>Frentes de placard</Link>
                </MenuItem>
              </Menu>
            </ListItem>
            <ListItem>
              {/* baja pero no cuando estoy en otra pagina, y tampoco lo puedo hacer smooth */}
              <a href="/#cto">
                <Button color="secondary">Contacto</Button>
              </a>
            </ListItem>
          </List>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              to={
                "https://wa.me/+5491138158705?text=Hola!%20les%20queria%20hacer%20una%20consulta"
              }
              target="_blank"
            >
              <Button
                aria-label="escribinos"
                variant="contained"
                color="error"
                startIcon={<WhatsAppIcon />}
              >
                <Typography fontWeight={500} fontSize="1em" letterSpacing={1}>
                  Escribinos
                </Typography>
              </Button>
            </Link>
          </Box>
          {/* deja solo el logo de wpp para mobile */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Link
              to={
                "https://wa.me/+5491138158705?text=Hola!%20les%20queria%20hacer%20una%20consulta"
              }
              target="_blank"
            >
              <IconButton color="secondary">
                <WhatsAppIcon />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}
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
    </Box>
  );
}

export default NavBar;
