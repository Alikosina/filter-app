import React, { memo } from "react";
import { ProductsListComponentProps } from "./models";
import "./ProductsListComponent.scss";
import LoaderComponent from "@components/LoaderComponent";

const ProductsListComponent = (props: ProductsListComponentProps) => {
  const { products } = props;
  return (
    <div className="products-list">
      {!products ? (
        <LoaderComponent />
      ) : (
        <React.Fragment>
          <div className="products-list__title"> Товары </div>
          {products.map((product: any) => (
            <div key={product.id} className="products-list__item">
              Наименование: {product.name} Количество: {product.qty} Цена:{" "}
              {product.price} Общая сумма: {product.sum}
            </div>
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default memo(ProductsListComponent);
