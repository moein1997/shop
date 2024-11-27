import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import './Product.css'; // Import the CSS file if it's in a separate file

const Product = (props)=>{
    const {cartItems,addToCart,removeFromCart} = useContext(ShopContext)
    const isInCart = cartItems?.some((item)=>item.id === props.data.id )
    // const isAvailable = props.data.availibility > cartItems.count
    const isAvailable = true
    return(
        <div className="col-3 product-card">
            <img 
                src={props.data.productImage} 
                alt={props.data.productName} // Descriptive and meaningful alt text
                className="product-image"
            />
            <h5>{props.data.productName}</h5>
            <p>price: {props.data.price}$</p>
            {props.data.offer && <p className="text-success fw-bold">{props.data.offer}</p>} {/* Display offer if it exists */}
            {/* <p>available: {props.data.availibility}</p> */}
            {isAvailable && <button className="btn btn-info" btn-sm onClick={()=>addToCart(props.data.id)}>+</button>}
            <span className="mx-1">
                {cartItems.find((item) => item.id === props.data.id)?.count || 0}
            </span>
            {isInCart && <button className="btn btn-info" btn-sm onClick={()=>removeFromCart(props.data.id)}>-</button>}
        </div>
    )
};

export default Product;