import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "@store/orders/ordersActions";
import LoaderComponent from "@components/LoaderComponent";
import "./App.scss";

const AppContainer = (props: any) => {
  const { ordersLoading } = props;
  useEffect(() => {
    props.dispatch(fetchOrders());
  }, []);
  return (
    <div>
      {ordersLoading ? (
        <LoaderComponent fullScreen />
      ) : (
        <div>Hello Filter-App!</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  ordersLoading: state.orders.loading
});

export default connect(mapStateToProps)(AppContainer);
