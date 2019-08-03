import React, { memo, useState } from "react";
import { OrdersListItemProps } from "./models";
import classnames from "classnames";
import "./OrdersListItem.scss";

const OrdersListItem = (props: OrdersListItemProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const { description, docDate, docNum } = props.order;
  const arrowClassName = classnames("orders-list-item__arrow", {
    "orders-list-item__arrow_opened": isOpened
  });
  const changeOpenState = () => {
    setIsOpened(!isOpened);
  };
  const { onClick } = props;
  return (
    <div className="orders-list-item">
      <div onClick={changeOpenState}>
        <span className={arrowClassName} />
      </div>
      <div>{description} </div>
      <div>{docDate}</div>
      <div>{docNum}</div>
    </div>
  );
};

export default memo(OrdersListItem);
