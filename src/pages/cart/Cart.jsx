import React, { useContext } from "react";
// import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/product";

const Cart = () => {
    const { cartItems,products } = useContext(ShopContext);

    // Filter products that are in the cart and have count > 0
    const filteredProducts = products.filter((product) =>
        cartItems.some((item) => item.id === product.id && item.count > 0)
    );

    // Calculate the total cost of all items in the cart
    const totalCost = cartItems.reduce((total, cartItem) => {
        const product = products.find((product) => product.id === cartItem.id);
        if (product) {
            return total + product.price * cartItem.count;
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
                            <Product data={product} />
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
                                    <td>{product.productName}</td>
                                    <td>{cartItem.count}</td>
                                    <td>${product.price.toFixed(2)}</td>
                                    <td>${(cartItem.count * product.price).toFixed(2)}</td>
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