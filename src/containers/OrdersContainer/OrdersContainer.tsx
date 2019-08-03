import React, { memo } from "react";
import { connect } from "react-redux";

const OrdersContainer = (props: any) => {
  const { orders } = props;
  return orders.map((order: any) => (
    <div key={order.id}> {order.description} </div>
  ));
};

const mapStateToProps = (state: any) => ({
  orders: state.orders.data
});

export default connect(mapStateToProps)(memo(OrdersContainer));
