import { createContext,useState,useEffect } from "react";
import axios from 'axios';
// import { PRODUCTS } from "../data/products";
export const ShopContext = createContext(null)

export const ShopContextProvider = (props)=>{

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const [cartItems, setCartItems] = useState([])

    const addToCart = (itemId) => {
        const product = products.find((p) => p.id === itemId);
        if (!product) {
            alert("Product not found!");
            return;
        }
    
        const cartItem = cartItems.find((item) => item.id === itemId);
    
        if (!cartItem) {
            // If the product is not yet in the cart, add it if availability > 0
            if (product.availability > 0) {
                setCartItems([...cartItems, { id: itemId, count: 1 }]);
            } else {
                alert(`Sorry, ${product.product_name} is out of stock!`);
            }
        } else {
            // If the product is already in the cart, check availability
            if (cartItem.count < product.availability) {
                setCartItems(
                    cartItems.map((item) =>
                        item.id === itemId
                            ? { ...item, count: item.count + 1 }
                            : item
                    )
                );
            } else {
                alert(
                    `Sorry, you've reached the maximum stock limit for ${product.product_name}!`
                );
            }
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.map((item) => {
            if (item.id === itemId) {
                return {...item, count: item.count - 1};
            } else {
                return item;
            }
        }).filter(item => item.count > 0));
    };

    const contextValue = {cartItems,addToCart,removeFromCart,products}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}