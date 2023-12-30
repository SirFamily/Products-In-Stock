import React from "react";
import FilterableProductTable from './Filterable-product-table';
import PRODUCTS from './data/product-data';
import Title from "./Title";
export default function App() {
  return (
    <>
    <Title />
    <FilterableProductTable products={PRODUCTS} />
    </>
  )
  
  
}
