import React, { memo } from "react";
import { connect } from "react-redux";
import { OrdersContainerProps } from "./models";

const OrdersContainer = (props: OrdersContainerProps) => {
  const { orders } = props;
  return orders.map(order => <div key={order.id}> {order.description} </div>);
};

const mapStateToProps = (state: any) => ({
  orders: state.orders.data
});

// @ts-ignore
export default connect(mapStateToProps)(memo(OrdersContainer));
