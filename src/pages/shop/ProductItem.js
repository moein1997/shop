import React, { useContext } from 'react';
import "./Product.css"
import { ShopContext } from '../../context/shopContext';
import { useNavigate } from 'react-router-dom';
const ProductItem = (props) => {
    const product = props.product
    const {addToCart,removeFromCart,cartItems} = useContext(ShopContext)
    const isInCart = cartItems?.some((item)=>item.id === product.id )
    const isAvailable = true
    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate(`/product/${product.id}`); // Redirect to product detail page using product ID
      };
    return (
                <div className="col-2 product-card" onClick={handleProductClick}>
                    <img className="product-image" src={`/assets/${product.category}/${product.product_image}`} alt={product.product_name} />
                    <h2>{product.product_name}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Available: {product.availability}</p>
                    <p>{product.offer || "No offers available"}</p>
                    {isAvailable && <button className="btn btn-info" btn-sm onClick={()=>addToCart(product.id)}>+</button>}
                    <span className="mx-1">
                        {cartItems.find((item) => item.id === product.id)?.count || 0}
                    </span>
                    {isInCart && <button className="btn btn-info" btn-sm onClick={()=>removeFromCart(product.id)}>-</button>}
                </div>
            )
};

export default ProductItem;