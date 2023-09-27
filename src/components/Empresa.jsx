import React from "react";
import { useEffect } from "react";

const Empresa = () => {
  useEffect(() => {
    document.title = "Lucio's aberturas - Empresa";
  }, []);
  return <div>Empresa</div>;
};

export default Empresa;
