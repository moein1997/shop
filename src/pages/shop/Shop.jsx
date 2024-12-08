import React from "react"
import ProductItem from "./ProductItem"
import { ShopContext } from '../../context/shopContext';
import { useContext } from 'react';
// import { PRODUCTS } from "../../data/products"
// import Product from "./product"


import "./Shop.css"
import Slider from "../../components/Slider";
import Category from "../../components/Category";
const Shop = ()=>{
    const {products} = useContext(ShopContext)
    const images = ["/assets/slider1.png","/assets/slider2.png","/assets/slider3.png","/assets/slider4.png","/assets/slider5.png","/assets/slider6.png"]

    return(
        <React.Fragment>
            <h1 className="shopname">Shop</h1>
            <div className="slider-container"><Slider images={images}/></div>
            <div className="row">
                {products.map((product)=>{
                    if(product.id % 2 === 0){
                        return <ProductItem key={product.item} product={product}/>
                    }
                })}
                <div className="slider-container"><Slider images={images}/></div>
                <h1>خرید بر اساس دسته بندی</h1>
                <div className="category-container">
                    <Category category={"Bag"}/>
                    <Category category={"Shoes"}/>
                    <Category category={"Sunglasses"}/>
                    <Category category={"Watch"}/>
                </div>
                <div className="slider-container"><Slider images={images}/></div>
                {products.map((product)=>{
                    if(product.id % 2 === 1){
                        return <ProductItem key={product.item} product={product}/>
                    }
                })}
            </div>
            <div className="slider-container"><Slider images={images}/></div>
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