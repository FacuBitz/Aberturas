import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

const ItemDetail = ({ data }) => {
  return (
    <Container>
      {data.map((prod) => (
        <Box key={prod.id}>
          <Stack
            sx={{ flexDirection: { xs: "column", br750: "row" } }}
            marginY="80px"
            justifyContent="center"
          >
            <Box
              maxWidth="500px"
              margin="auto"
              sx={{ paddingRight: { xs: "0", br750: "5px" } }}
            >
              <img src={prod.img} className="img" alt={prod.alt} />
            </Box>
            <Stack
              spacing={1}
              maxWidth="650px"
              sx={{ marginTop: { xs: "20px", br750: "0" } }}
            >
              <Typography
                variant="button"
                fontSize="1.5rem"
                fontWeight={600}
                color="error"
                sx={{ alignContent: "" }}
              >
                Caracteristicas
              </Typography>
              <Typography variant="h6" color="secondary.light">
                {prod.title}
              </Typography>
              <Typography
                className="white-space"
                variant="subtitle2"
                fontSize="0.96rem"
                lineHeight="28px"
              >
                {prod.description.join("\n - ")}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Container>
  );
};

export default ItemDetail;
