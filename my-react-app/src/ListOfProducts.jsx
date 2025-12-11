import React, { useState } from 'react';

function ListOfProducts() {
  const [products, setProducts] = useState(["cafea", "biscuiti"]);

  function handleAddProduct() {
    const newProduct = document.getElementById("productInput").value;
    document.getElementById("productInput").value = "";

    setProducts(p => [...p, newProduct]);
  }

  function handleRemoveProduct(index) {
    setProducts(products.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Products</h2>

      <ul>
        {products.map((product, index) => (
          <li key={index} onClick={() => handleRemoveProduct(index)}>
            {product}
          </li>
        ))}
      </ul>

      <input type="text" id="productInput" placeholder="Enter product name"/>

      <button onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
}

export default ListOfProducts;
