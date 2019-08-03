import React, { memo } from "react";
import "./ProductsListComponent.scss";

const ProductsListComponent = (props: any) => {
  console.log("props = ", props);
  const { products } = props;
  return (
    <div className="products-list">
      {products.map((product: any) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
};

export default memo(ProductsListComponent);
