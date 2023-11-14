import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Box from "@mui/material/Box";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [prod, setProd] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();
      const catFilter = data.filter((products) => products.id == id);
      setProd(catFilter);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box component="main" display="flex" alignItems="center">
      <ItemDetail data={prod} />
    </Box>
  );
};

export default ItemDetailContainer;
