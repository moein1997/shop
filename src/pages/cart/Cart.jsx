import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Cart = () => {
    const { cartItems, products } = useContext(ShopContext);

    const filteredProducts = products.filter((product) =>
        cartItems.some((item) => item.id === product.id && item.count > 0)
    );

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
                                    src={`/assets/${product.product_image}`}
                                    alt={product.product_name}
                                    style={{ width: "100%", height: "auto", borderRadius: "5px" }}
                                />
                                {/* Product Details */}
                                <h3>{product.product_name}</h3>
                                <p>Price: ${parseFloat(product.price || 0).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
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
                                            src={product.product_image}
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
