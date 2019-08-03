import React, { memo } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "@store/products/productsActions";
import OrdersListItem from "@components/OrdersListItem";
import FilterContainer from "@containers/FilterContainer";
import { OrdersContainerProps } from "./models";
import "./ordersContainer.scss";
import LoaderComponent from "@app/components/LoaderComponent";

const OrdersContainer = (props: OrdersContainerProps) => {
  const { orders, dispatch, products, ordersLoading } = props;
  const handleOnClick = (id: number) => {
    if (!products[id]) {
      dispatch(fetchProducts(id));
    }
  };
  return (
    <div className="orders-list">
      <div className="orders-list__header">
        <h2 className="order-list__title">Заказы</h2>
        <FilterContainer />
      </div>
      {ordersLoading ? (
        <LoaderComponent />
      ) : (
        orders.map(order => (
          <OrdersListItem
            key={order.id}
            products={products[order.id]}
            order={{ ...order }}
            onClick={handleOnClick.bind(this, order.id)}
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  orders: state.orders.data,
  ordersLoading: state.orders.loading,
  products: state.products.data
});

// @ts-ignore
export default connect(mapStateToProps)(memo(OrdersContainer));
