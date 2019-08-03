import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "@store/orders/ordersActions";
import OrdersContainer from "@containers/OrdersContainer";
import "./App.scss";

const AppContainer = (props: any) => {
  useEffect(() => {
    props.dispatch(fetchOrders());
  }, []);
  return (
    <div>
      <OrdersContainer />
    </div>
  );
};

export default connect()(AppContainer);
