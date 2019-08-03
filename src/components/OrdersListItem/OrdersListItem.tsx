import React, { memo } from "react";
import { OrderItemModel } from "@store/orders/models";
import "./OrdersListItem.scss";

const OrdersListItem = (props: OrderItemModel) => {
  const { description } = props;
  return <div className="orders-list-item">{description}</div>;
};

export default memo(OrdersListItem);
