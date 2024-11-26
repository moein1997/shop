import { createContext,useState } from "react";

export const ShopContext = createContext(null)

export const ShopContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState([])

    const addToCart = (itemId)=>{
        if(!cartItems?.find((item)=>item.props.data.id === itemId)){
            setCartItems([...cartItems,{id: itemId, count : 1}])
        }
        else{
            setCartItems(cartItems.map((item)=>{
                if( item.props.data.id === itemId){
                    return {...item,count: item.props.data.count + 1}
                }
                else{
                    return item
                }
            }))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems(cartItems.map((item)=>{
            if(item.props.data.id === itemId){
                return {...item,count : item.props.data.count -1}
            }
            else{
                return item
            }
        }))
    }

    const contextValue = {cartItems,addToCart,removeFromCart}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}