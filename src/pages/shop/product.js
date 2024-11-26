import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Product = (props)=>{
    const {cartItems,addToCart,removeFromCart} = useContext(ShopContext)
    return(
        <div className="col-3">
            <img src={props.data.productImage} alt="Item" className="w-100"/>
            <h5>{props.data.productName}</h5>
            <p>price: {props.data.price}$</p>
            <button className="btn btn-info" btn-sm onClick={()=>addToCart(props.data.id)}>+</button>
            <span className="mx-1">{cartItems?.filter((row)=> row.props.data.id === props.data.id)[0]?.count}</span>
            <button className="btn btn-info" btn-sm onClick={()=>removeFromCart(props.data.id)}>-</button>
        </div>
    )
};

export default Product;