import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

const Item = ({ id, category, name, img }) => {
  console.log("item");
  return (
    <div>
      <Card>
        <CardMedia
          image={img}
          component="img"
          sx={{ maxWidth: { xs: "60px", md: "90px" } }}
        />
        <CardContent>
          <Stack>
            <Typography>{name}</Typography>
            <Typography>{id}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default Item;
