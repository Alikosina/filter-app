import React, { memo } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "@store/products/productsActions";
import OrdersListItem from "@components/OrdersListItem";
import { OrdersContainerProps } from "./models";
import "./ordersContainer.scss";

const OrdersContainer = (props: OrdersContainerProps) => {
  const { orders } = props;
  return (
    <div className="orders-list">
      <h2 className="order-list__title">Заказы</h2>
      {orders.map(order => (
        <OrdersListItem order={{ ...order }} onClick={() => {}} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  orders: state.orders.data
});

// @ts-ignore
export default connect(mapStateToProps)(memo(OrdersContainer));
