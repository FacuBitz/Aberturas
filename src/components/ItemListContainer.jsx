import { Box, Typography } from "@mui/material";
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
    <div>
      <Box h="100px" color="black">
        <Typography as="h2" size="2xl">
          {category}
          {/* {!category ? <p>Catalogo</p> : <p>{`${category}`}</p>} */}
        </Typography>
      </Box>
      <ItemList products={prod} />
    </div>
  );
};

export default ItemListContainer;
