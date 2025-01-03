import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Cart = () => {
    const { cartItems, products,addToCart,removeFromCart,clearCart  } = useContext(ShopContext);

    const cartItemMap = new Map(cartItems.map(item => [item.id, item.count]));
    const filteredProducts = products.filter(product => cartItemMap.has(product.id) && cartItemMap.get(product.id) > 0);


    const totalCost = cartItems.reduce((total, cartItem) => {
        const product = products.find((product) => product.id === cartItem.id);
        if (product) {
            return total + parseFloat(product.price || 0) * cartItem.count;
        }
        return total;
    }, 0);

    return (
        <React.Fragment>
            <h1>Your Cart</h1>

            {/* Items Section */}
            <div className="items-section">
                <h2>Items in Your Cart</h2>
                <div className="row">
                    {filteredProducts.map((product) => (
                        <div className="col-4" key={product.id}>
                            <div className="cart-product-card">
                                {/* Product Image */}
                                <img
                                    src={`/assets/${product.category}/${product.product_image}`}
                                    alt={product.product_name}
                                    style={{ width: "100%", height: "auto", borderRadius: "5px" }}
                                />
                                {/* Product Details */}
                                <h3>{product.product_name}</h3>
                                <p>Price: ${parseFloat(product.price || 0).toFixed(2)}</p>
                                <button className="btn btn-info btn-sm" onClick={() => addToCart(product.id)}>+</button>
                                <span className="mx-1">
                                    {cartItems.find((item) => item.id === product.id)?.count || 0}
                                </span>
                                <button className="btn btn-info btn-sm" onClick={() => removeFromCart(product.id)}>-</button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Clear Cart Button */}
                {cartItems.length > 0 && (
                    <button className="clear-cart-button" onClick={clearCart}>
                    Clear Carts
                    </button>
                )}
            </div>

            {/* Sales Receipt Section */}
            <div className="sales-receipt mt-4">
                <h2>Sales Receipt</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price (per unit)</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => {
                            const cartItem = cartItems.find((item) => item.id === product.id);
                            return (
                                <tr key={product.id}>
                                    <td>
                                        <img
                                            src={`/assets/${product.category}/${product.product_image}`}
                                            alt={product.product_name}
                                            style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                                        />
                                        {product.product_name}
                                    </td>
                                    <td>{cartItem.count}</td>
                                    <td>${parseFloat(product.price || 0).toFixed(2)}</td>
                                    <td>${(cartItem.count * parseFloat(product.price || 0)).toFixed(2)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>
                                Total:
                            </td>
                            <td style={{ fontWeight: "bold" }}>${totalCost.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </React.Fragment>
    );
};

export default Cart;
