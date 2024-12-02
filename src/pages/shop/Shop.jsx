import React from "react"
import ProductItem from "./ProductItem"
import { ShopContext } from '../../context/shopContext';
import { useContext } from 'react';
// import { PRODUCTS } from "../../data/products"
// import Product from "./product"


import "./Shop.css"
const Shop = ()=>{
    const {products} = useContext(ShopContext)

    return(
        <React.Fragment>
            <h1>Shop</h1>
            <div className="row">
                {products.map((product)=>{
                    return <ProductItem key={product.item} product={product}/>
                })}
            </div>
        </React.Fragment>
    )
}

export default Shop




// const Shop = () =>{
//     const {products,addToCart,removeFromCart,cartItems} = useContext(ShopContext)
//     // const isAvailable = true;
//     const isInCart = cartItems?.some((item)=>item.id === item.id )
//     return(
//         <React.Fragment>
//             <h1>Shop</h1>
//             <div className="row">
//                 {products.map((product) => (
//                     <ProductItem item={product.item}/>
//                 )
//             </div>
//         </React.Fragment>
//     ));
// }