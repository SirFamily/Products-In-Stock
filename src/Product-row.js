import React from "react";

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr>
        <td><img className="icon" src={product.img} alt={product.name}></img></td>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }export default ProductRow;