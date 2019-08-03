import { ProductsStateModel } from "./models";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from "./productsConstants";

const initialState: ProductsStateModel = {
  loading: true,
  error: null,
  data: {}
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        loading: false,
        data: {
          ...state.data,
          [action.payload.orderId]: action.payload.products
        }
      };
    }
  }
  return state;
};
