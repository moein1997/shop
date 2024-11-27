import { createContext,useState } from "react";
import { PRODUCTS } from "../data/products";
export const ShopContext = createContext(null)

export const ShopContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState([])

    const addToCart = (itemId) => {
        const product = PRODUCTS.find((p) => p.id === itemId);
        const cartItem = cartItems.find((item) => item.id === itemId);

        if (!cartItem) {
            // If the product is not yet in the cart, add it if availability > 0
            if (product.availibility > 0) {
                setCartItems([...cartItems, { id: itemId, count: 1 }]);
            } else {
                alert(`Sorry, ${product.productName} is out of stock!`);
            }
        } else {
            // If the product is already in the cart, check availability
            if (cartItem.count < product.availibility) {
                setCartItems(
                    cartItems.map((item) =>
                        item.id === itemId
                            ? { ...item, count: item.count + 1 }
                            : item
                    )
                );
            } else {
                alert(`Sorry, you've reached the maximum stock limit for ${product.productName}!`);
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

    const contextValue = {cartItems,addToCart,removeFromCart}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}