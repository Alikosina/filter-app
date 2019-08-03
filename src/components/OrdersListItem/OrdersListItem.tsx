import React, { memo, useState, useCallback } from "react";
import { OrdersListItemProps } from "./models";
import classnames from "classnames";
import ProductsListComponent from "@components/ProductsListComponent";
import "./OrdersListItem.scss";

const OrdersListItem = (props: OrdersListItemProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const { onClick, products } = props;
  const { description, docDate, docNum } = props.order;
  const containerClassName = classnames("orders-list-item-container", {
    "orders-list-item-container_opened": isOpened
  });
  const className = classnames("orders-list-item", {
    "orders-list-item_opened": isOpened
  });
  const arrowClassName = classnames("orders-list-item__arrow", {
    "orders-list-item__arrow_opened": isOpened
  });
  const handleArrowClick = useCallback(() => {
    setIsOpened(!isOpened);
    onClick();
  }, [isOpened]);
  return (
    <div className={containerClassName}>
      <div className={className}>
        <div onClick={handleArrowClick}>
          <span className={arrowClassName} />
        </div>
        <div>Номер: {docNum} </div>
        <div>Дата: {docDate} </div>
        <div>Описание: {description} </div>
      </div>
      {isOpened ? (
        <div>
          <ProductsListComponent products={products} />
        </div>
      ) : null}
    </div>
  );
};

export default memo(OrdersListItem);
