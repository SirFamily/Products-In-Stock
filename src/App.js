import React from "react";
import FilterableProductTable from './Filterable-product-table';
import PRODUCTS from './data/product-data'
export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
