import { LINK_MAIN_API } from "../../constants";
import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_ERROR
} from "./ordersConstants";

export const fetchOrders = () => (dispatch: any) => {
  dispatch({ type: FETCH_ORDERS });
  fetch(`${LINK_MAIN_API}/order`)
    .then(r => r.json())
    .then(response => {
      dispatch({ type: FETCH_ORDERS_SUCCESS, payload: response });
    })
    .catch(error => {
      dispatch({
        type: FETCH_ORDERS_ERROR,
        payload: error
      });
    });
};
