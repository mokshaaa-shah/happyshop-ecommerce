import React from "react";
import Product from "./Product";
import Feature from "./Feature";
import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../Context/Filter_Context";
const Productlist = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) return <GridView products={filter_products} />;
  if (grid_view === false) return <ListView products={filter_products} />;
};

export default Productlist;
