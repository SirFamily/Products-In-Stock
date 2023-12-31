import React from "react";
import ProductCategoryRow from './Product-category-row';
import ProductRow from './Product-row';

function ProductTable({ products, filterText, inStockOnly }) {
  const productsrow = products
    .filter((product) => {
      const name = product.name.toLowerCase();
      const filterTextLower = filterText.toLowerCase();
      const isInStock = !inStockOnly || product.stocked;
      return name.includes(filterTextLower) && isInStock;
    })
    .map((product, index, products) => {
      const isNewCategory = index === 0 || product.category !== products[index - 1].category;
      return (
        <>
          {isNewCategory && (
            <ProductCategoryRow category={product.category} key={product.category} />
          )}
          <ProductRow product={product} key={product.name} />
        </>
      );
    });

  return (
    <table>
      <thead>
        <tr className="green">
          <th colSpan="2">Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{productsrow}</tbody>
    </table>
  );
}

export default ProductTable;
