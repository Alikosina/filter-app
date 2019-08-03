import { LINK_MAIN_API } from "@app/constants";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS
} from "./productsConstants";

export const fetchProducts = (orderId: number) => (dispatch: any) => {
  dispatch({ type: FETCH_PRODUCTS });
  fetch(`${LINK_MAIN_API}/order/${orderId}`)
    .then(r => r.json())
    .then(response => {
      setTimeout(() => {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: {
            products: response,
            orderId
          }
        });
      }, 500);
    })
    .catch(error => {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: error
      });
    });
};
