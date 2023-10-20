import { Container, Stack } from "@mui/material";
import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  console.log("ItemList");
  console.log(products);
  return (
    <div>
      <Container maxWidth="container.xl">
        <Stack spacing={4} flexDirection="row">
          {products.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              category={product.category}
            />
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default ItemList;
