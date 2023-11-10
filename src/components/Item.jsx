import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const Item = ({ id, alt, name, img }) => {
  console.log("item");
  return (
    <Box sx={{ margin: { xs: "auto", br750: "0" } }}>
      <Card>
        <CardActionArea component={Link} to={`/item/${id}`}>
          <CardMedia
            image={img}
            component="img"
            alt={alt}
            sx={{
              width: { xs: "200px", br400: "320px" },
              height: { xs: "210px", br400: "330px" },
              paddingTop: "10px",
              margin: "auto",
            }}
          />
          <CardContent>
            <Stack>
              <Typography variant="button" fontSize="1.1rem" textAlign="center">
                {name}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Item;
