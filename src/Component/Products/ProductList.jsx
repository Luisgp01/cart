import React from "react";
import Product from "./Product";

const ProductList = ({ addToCart }) => {
  
  const products = [
    { id: 1, name: "Headphones", price: 11.5 },
    { id: 2, name: "Asus", price: 7.5  },
    { id: 3, name: "Mouse", price: 12.0 },
    { id: 4, name: "iPAD", price: 20.0 },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
