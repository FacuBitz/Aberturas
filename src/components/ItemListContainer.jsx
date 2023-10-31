import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  useEffect(() => {
    document.title = "Lucio's aberturas - Catalogo";
  }, []);

  // toma el parametro category de la url si existe
  const { category } = useParams();

  // hook de estado, prod=variable, setProd=funcion modificadora
  const [prod, setProd] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();
      if (category === undefined) {
        setProd(data);
      } else {
        const catFilter = data.filter(
          (products) => products.category === category
        );
        setProd(catFilter);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <Container maxWidth="xl">
      <Stack
        height="100px"
        justifyContent="center"
        alignItems="center"
        marginY="20px"
      >
        <Typography
          variant="button"
          sx={{ fontSize: { xs: "1.3rem", br400: "1.6rem" } }}
          fontWeight={600}
          color="secondary.light"
        >
          Catalogo {category}
        </Typography>
      </Stack>
      <ItemList products={prod} />
    </Container>
  );
};

export default ItemListContainer;
