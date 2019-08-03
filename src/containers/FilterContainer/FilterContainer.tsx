import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "@store/orders/ordersActions";
import "./FilterContainer.scss";

const FilterContainer = (props: any) => {
  const [filterValue, setFilterValue] = useState("");
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const handleOnChange = (e: any) => {
    const value = e.currentTarget.value;
    setFilterValue(value);
  };
  const handleOnClick = () => {
    const queryObject = {
      filter: filterValue
    };
    props.dispatch(fetchOrders(queryObject));
    setIsActiveFilter(true);
  };
  const handleOnClickCancel = () => {
    props.dispatch(fetchOrders());
    setIsActiveFilter(false);
    setFilterValue("");
  };
  return (
    <div className="filter-container">
      Фильтр по номеру заказа{" "}
      <input onChange={handleOnChange} value={filterValue} type="text" />
      <button
        className="filter-container__button"
        onClick={handleOnClick}
        disabled={!filterValue}
      >
        Применить фильтрацию
      </button>
      <button
        className="filter-container__button"
        disabled={!isActiveFilter}
        onClick={handleOnClickCancel}
      >
        отменить фильтрацию
      </button>
    </div>
  );
};

export default connect()(memo(FilterContainer));
