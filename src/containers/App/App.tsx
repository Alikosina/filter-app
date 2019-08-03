import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../store/orders/ordersActions";

const AppContainer = (props: any) => {
  useEffect(() => {
    props.dispatch(fetchOrders());
  }, []);
  return <div>Hello Filter-App!</div>;
};

export default connect()(AppContainer);
