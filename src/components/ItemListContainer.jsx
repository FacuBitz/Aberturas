import React from "react";
import { useEffect } from "react";

const ItemListContainer = () => {
  useEffect(() => {
    document.title = "Lucio's aberturas - Catalogo";
  }, []);
  return <div>ItemListContainer</div>;
};

export default ItemListContainer;
