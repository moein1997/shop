import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import "./productpage.css"

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useContext(ShopContext);

  // Find product using id
  const product = products.find((p) => p.id === Number(id));

  // Handle undefined product
  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-page">
      <img
        className="product-image"
        src={`/assets/${product.category}/${product.product_image}`}
        alt={product.product_name}
      />
      <h1>{product.product_name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
