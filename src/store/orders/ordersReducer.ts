import {
  FETCH_ORDERS,
  FETCH_ORDERS_ERROR,
  FETCH_ORDERS_SUCCESS
} from "./ordersConstants";
import { OrdersStateModel } from "./models/ordersStateModel";

const initialState: OrdersStateModel = {
  loading: false,
  data: [],
  error: null
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ORDERS: {
      return { ...initialState, loading: true };
    }
    case FETCH_ORDERS_SUCCESS: {
      return { ...initialState, data: action.payload };
    }
    case FETCH_ORDERS_ERROR: {
      return { ...initialState, error: action.payload };
    }
  }
  return state;
};
