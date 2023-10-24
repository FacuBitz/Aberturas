import { Container, Stack } from "@mui/material";
import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      <Stack
        spacing={5}
        flexDirection="row"
        marginBottom="80px"
        justifyContent="center"
        sx={{ flexDirection: { xs: "column", br750: "row" } }}
      >
        {products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.img}
            name={product.name}
            category={product.category}
            sub={product.subCategory}
          />
        ))}
      </Stack>
    </div>
  );
};

export default ItemList;
