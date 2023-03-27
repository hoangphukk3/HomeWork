import React, { useState } from "react";
const UserProduct = ({ products }) => {
  return (
    <div>
      <h2>User Product</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <br />
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserProduct;
