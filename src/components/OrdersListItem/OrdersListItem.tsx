import React, { memo, useState } from "react";
import { OrdersListItemProps } from "./models";
import classnames from "classnames";
import LoaderComponent from "@components/LoaderComponent";
import "./OrdersListItem.scss";

const OrdersListItem = (props: OrdersListItemProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const { onClick, products } = props;
  const { description, docDate, docNum } = props.order;
  const arrowClassName = classnames("orders-list-item__arrow", {
    "orders-list-item__arrow_opened": isOpened
  });
  const handleArrowClick = () => {
    setIsOpened(!isOpened);
    onClick();
  };
  return (
    <React.Fragment>
      <div className="orders-list-item">
        <div onClick={handleArrowClick}>
          <span className={arrowClassName} />
        </div>
        <div>{description} </div>
        <div>{docDate}</div>
        <div>{docNum}</div>
      </div>
      {isOpened ? (
        <div>
          {!products ? (
            <LoaderComponent />
          ) : (
            products.map(product => <div key={product.id}>{product.name}</div>)
          )}
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default memo(OrdersListItem);
