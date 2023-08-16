import React from "react";
import Product from "./Product";
import Picture from "../../img/card2.jpg";
import Image3 from "../../img/card3.jpg";
import Image4 from "../../img/card4.jpg";
import Image from "../../img/card.jpg";

const ProductList = ({ addToCart }) => {
  
  const products = [
    { id: 1, name: "Headphones", price: 11.5, image: { Image } },
    { id: 2, name: "Asus", price: 7.5, image: { Picture } },
    { id: 3, name: "Mouse", price: 12.0, image: { Image3 } },
    { id: 4, name: "iPAD", price: 20.0, image: { Image4 } },
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
