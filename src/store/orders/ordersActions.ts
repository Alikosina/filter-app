import { LINK_MAIN_API } from "@app/constants";
import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_ERROR
} from "./ordersConstants";
import { prepareQuery } from "./helper";

export const fetchOrders = (query?: any) => (dispatch: any) => {
  dispatch({ type: FETCH_ORDERS });
  fetch(`${LINK_MAIN_API}/order${prepareQuery(query)}`)
    .then(r => r.json())
    .then(response => {
      setTimeout(() => {
        dispatch({ type: FETCH_ORDERS_SUCCESS, payload: response });
      }, 1500);
    })
    .catch(error => {
      dispatch({
        type: FETCH_ORDERS_ERROR,
        payload: error
      });
    });
};
