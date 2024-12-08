import { useContext } from "react";
import ProductItem from "../pages/shop/ProductItem";
import { ShopContext } from "../context/shopContext";

import "./categorypage.css";

const CategoryPage = (props) => {
  const { products } = useContext(ShopContext);
  return (
    <div className="row">
      {products.map((product) => {
        if (product.category === `${props.category}`) {
          return <ProductItem key={product.item} product={product} />;
        }
      })}
    </div>
  );
};

export default CategoryPage;
